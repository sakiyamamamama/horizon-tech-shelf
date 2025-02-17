"use client";
import Link from 'next/link';
import { MdBlock } from 'notion-to-md/build/types';
import React, { useEffect, useState } from 'react';

type Props = {
  mdBlock: MdBlock;
  depth: number;
  slug:string;
};
  
type ogsData ={
  ogTitle?: string;
  ogDescription?: string;
  ogSiteName?:string;
  ogLocale?: string;
  favicon?: string;
  ogUrl?: string;
  ImageUrl?:string;
}

export default function Bookmark(props: Props) {
  const { mdBlock,slug } = props;
  const [ogpData, setOgpData] = useState<ogsData>();
  const match = mdBlock.parent.match(/\((.*?)\)/g);

  useEffect(() => {
    const fetchOgpData = async () => {
        const res = await fetch(`/horizon-atlas/notion_data/eachPage/${slug}/ogsData/${mdBlock.blockId}.json`);
        const data:ogsData = await res.json();
        console.log(data.favicon?.slice(0,8)==="https://")
        if(data.favicon?.slice(0,8)!=="https://"){
          const url = data.ogUrl!;
          const domain = new URL(url).origin;
          let datafa = data.favicon
          if(datafa!==undefined && datafa[0]!=="/"){
            datafa = "/" + datafa;
          }
          const favi = domain + datafa;
          setOgpData({
            ogTitle: data.ogTitle,
            ogDescription: data.ogDescription,
            ogSiteName: data.ogSiteName,
            ogLocale:data.ogLocale,
            favicon: favi,
            ogUrl: data.ogUrl,
            ImageUrl:data.ImageUrl
          })
        }else{
          setOgpData(data);
        }
        }
    fetchOgpData();
  }, []);
  if(match)
  return (
    <div className="my-2 rounded-sm border-2 border-neutral-200 hover:bg-neutral-100">
        
            <Link href={ogpData && ogpData.ogUrl ? ogpData.ogUrl : match[0].slice(1,-1)}>
                <div className="flex">
                    <div className='m-3'>
                        <p className='text-neutral-800 line-clamp-1'>{ogpData && ogpData.ogTitle ? ogpData.ogTitle : match[0].slice(1, -1)}</p>
                        <p className='text-neutral-500 text-sm line-clamp-2'>{ogpData && ogpData.ogDescription ? ogpData.ogDescription : ""}</p>
                        <div className='flex mb-0 mt-2'>
                            {ogpData && ogpData.favicon!==undefined && 
                              <img src={ogpData.favicon} className='w-auto max-h-4 rounded-full m-0 mr-2' alt={'pageIcon'} />}
                            <span className='text-neutral-600 text-xs line-clamp-1'>
                              {ogpData && ogpData.ogUrl ? ogpData.ogUrl : match[0].slice(1,-1)}
                            </span>
                        </div>
                    </div>
                    {ogpData && ogpData.ImageUrl !==undefined && ogpData.ImageUrl!==undefined && (
                    <div className='p-0 m-0' style={{ lineHeight: 0 }}>
                        <img src={ogpData.ImageUrl} className='w-96 h-28 rounded-sm lg:w-72' alt={'pageImage'} />
                    </div>
                    )}
                </div>
            </Link>
        {/* {ogpData===undefined && match && (
          <Link href={match[0].slice(1, -1)}>
          <div className="flex">
              <div className='m-3'>
                  <p className='text-neutral-800 line-clamp-1'>{match[0].slice(1, -1)}</p>
                  <div className='flex mb-0 mt-2'>
                      <span className='text-neutral-600 text-xs line-clamp-1'>
                        {match[0].slice(1, -1)}
                      </span>
                  </div>
              </div>
          </div>
      </Link>
        )} */}
    </div>
  );
}
