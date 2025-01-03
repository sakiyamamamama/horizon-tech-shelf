import { MdBlock } from 'notion-to-md/build/types'
import React from 'react'
import Paragraph from './paragraph/paragraph';
import Heading1 from './Heading1/Heading1';
import Heading2 from './Heading2/Heading2';
import Heading3 from './Heading3/Heading3';
import Divider from './divider/divider';
import Code from './code/Code';
import NumberedListItem from './numbered_list_item/numbered_list_item';
import BulletedListItem from './bulleted_list_ite/bulleted_list_item';
import Callout from './callout/callout';
import Quote from './quote/quote';
import ImageBlock from './image/image';
import TableBlock from './table/table';
import ChildPage from './child_page/child_page';
import Bookmark from './bookmark/bookmark';

type Props ={
    mdBlock:MdBlock
    depth:number
}

export default function MdBlockComponent(props:Props) {
    const {mdBlock,depth} = props;
    if(mdBlock.type==='paragraph'){
      return <Paragraph parent={mdBlock.parent} depth={depth} />
    }else if(mdBlock.type==='heading_1'){
        return <Heading1 mdBlock={mdBlock} depth={depth} />
    }else if(mdBlock.type === 'heading_2'){
        return <Heading2 mdBlock={mdBlock} depth={depth} />
    }else if(mdBlock.type==='heading_3'){
        return <Heading3 mdBlock={mdBlock} depth={depth} />
    }else if(mdBlock.type==='divider'){
        return <Divider />
    }else if(mdBlock.type === 'code'){
        return <Code mdBlock={mdBlock} depth={depth} />
    }else if(mdBlock.type==='numbered_list_item'){
        return <NumberedListItem mdBlock={mdBlock} depth={depth} />
    }else if(mdBlock.type==='bulleted_list_item'){
        return <BulletedListItem mdBlock={mdBlock} depth={depth} />
    }else if(mdBlock.type==='callout'){
        return <Callout mdBlock={mdBlock} depth={depth} />
    }else if(mdBlock.type === 'quote'){
        return <Quote mdBlock={mdBlock} depth={depth} />
    }else if(mdBlock.type === 'image'){
        return <ImageBlock mdBlock={mdBlock} depth={depth} />
    }else if(mdBlock.type==='table'){
        return <TableBlock mdBlock={mdBlock} depth={depth} />
    }else if(mdBlock.type==='child_page'){
        return <ChildPage mdBlock={mdBlock} />
    }else if(mdBlock.type == 'bookmark'){
        return <Bookmark mdBlock={mdBlock} depth={depth} />
    }
    return (
        <>
          <div></div>
        </>
    )
}

