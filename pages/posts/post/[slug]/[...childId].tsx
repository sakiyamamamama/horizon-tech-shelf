import Layout from '@/components/Layout/Layout';
import SideBlock from '@/components/SideBlock/SideBlock';
import MdBlockComponent from '@/components/mdBlocks/mdBlock';
import { BASIC_NAV, HOME_NAV } from '@/constants/pageNavs';
import { getAllTags, getChildPage } from '@/lib/services/notionApiService';
import { pageNav } from '@/types/pageNav';
import { PostMetaData } from '@/types/postMetaData';
import { GetStaticProps } from 'next';
import { MdBlock } from 'notion-to-md/build/types';

type Props = {
  mdBlocks:MdBlock[];
  pageNavs:pageNav[];
  parentTitle:string;
  childNavs:pageNav[];
  slug:string;
  allTags:string[];
};

type pagePath = {
  params: { slug:string, childId:string[] }
}

import path from 'path';
import fs from "fs";

export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "public", "notion_data", "notionDatabase.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const allPosts: PostMetaData[] = JSON.parse(jsonData);
  // const allPosts: PostMetaData[] = await getAllPosts();
  const paths: pagePath[] = (
    await Promise.all(
      allPosts.map(async (post) => {
        // const postData = await getSinglePost(post.slug);
        const postPath = path.join(process.cwd(), "public", "notion_data", "eachPage", `${post.slug}`,"page.json");
        const postData = fs.readFileSync(postPath, "utf8");
        const mdBlocks:MdBlock[] = JSON.parse(postData);
        const childPages = mdBlocks.filter((block)=>block.type==='child_page')
        return childPages.map((child) => ({
          params: {
            slug: post.slug,
            childId: [child.blockId],
          },
        }));
      })
    )
  ).flat();

  return {
    paths,
    fallback: 'blocking', // ISRを有効化
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
    const currentSlug = context.params?.slug as string;
    const childparam = (context.params?.childId as string[]) || [];
    // const post = await getSinglePost(currentSlug);
    // const allPosts = await getAllPosts();
    const postPath = path.join(process.cwd(), "public", "notion_data", "eachPage", `${currentSlug}`,"page.json");
    const postData = fs.readFileSync(postPath, "utf8");
    const mdBlocks:MdBlock[] = JSON.parse(postData);
    const filePath = path.join(process.cwd(), "public", "notion_data", "notionDatabase.json");
    const jsonData = fs.readFileSync(filePath, "utf8");
    const allPosts: PostMetaData[] = JSON.parse(jsonData);
    const allTags = await getAllTags(allPosts);
    const singlePost = allPosts.filter(item=>item.slug===currentSlug)
    const post ={
      mdBlocks,
      metadata:singlePost[0]
    }

    let currentchild = post.mdBlocks;
    const links:string[] = [`/posts/post/${post.metadata.slug}`];
    const pageNavs:pageNav[] = post.metadata.is_basic_curriculum ?
      [HOME_NAV,BASIC_NAV,{title:post.metadata.category,id:`/posts/course/${post.metadata.category}/1`},{title:post.metadata.title,id:`/posts/post/${post.metadata.slug}`}]
      : [HOME_NAV,{title:post.metadata.category,id:`/posts/course/${post.metadata.category}/1`},{title:post.metadata.title,id:`/posts/post/${post.metadata.slug}`}];
    for (let i = 0; i < childparam.length; i++) {
      const childpages = currentchild.filter((block)=>block.type==='child_page');
      const child = childpages.filter((block)=>block.blockId===childparam[i]);
      if(child[0]!==undefined){
        links.push(child[0].blockId);
        let link = "";
        for(let k=0;k<links.length;k++){
          link = link + links[k];
        }
        pageNavs.push({title:child[0].parent.replace("## ",""), id:link});
        currentchild = child[0].children;
      }
    }
    const childPages = getChildPage(post.mdBlocks);
    const childNavs:pageNav[] = childPages.map((page)=>{
      return {
        title:page.parent.split('## ')[1],
        id:page.blockId,
        child:true,
      }
    })

    return {
        props: {
            mdBlocks:currentchild,
            pageNavs,
            parentTitle:post.metadata.title,
            childNavs,
            slug:currentSlug,
            allTags
        },
        // revalidate: 300
    };
};

const PostChildPage = ( props : Props) => {
    const {mdBlocks, pageNavs,parentTitle,childNavs,slug,allTags} = props;

    return (
      <Layout headerProps={{pageNavs:pageNavs,allTags}} sideNavProps={{title:parentTitle,slug,childPages:childNavs}}>
        <div className='mt-24'>
          <section className="p-5 pb-10 md:w-3/4 lg:w-4/5 bg-white">
            <h2 className="w-full text-2xl font-medium">
                {pageNavs[pageNavs.length - 1].title}
            </h2>
            <div className='border-b-2 mt-2'></div>
            {mdBlocks.map((mdBlock, i) => (
                <MdBlockComponent mdBlock={mdBlock} depth={0} slug={slug} key={i} />
            ))}
          </section>
          <div className='hidden md:block md:w-1/4 mt-5'>
            <SideBlock title={parentTitle} slug={slug} childPages={childNavs} />
          </div>
        </div>
    </Layout>
    );
};
export default PostChildPage;