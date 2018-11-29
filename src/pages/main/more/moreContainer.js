import React , { Component } from 'react';
import * as Common from '@C/common'
import {
    MoreWrapper,
    MoreItem,
    Space
} from './styledComponent';
import { Item } from 'antd-mobile/lib/tab-bar';

class MoreContainer extends Component{

    state = {
        dataItem : [
            { id : 1,  IconType : 'fa-heart-o', title : '我的收藏', path : '/collect' },
            { id : 2,  IconType : 'fa-rss', title : '浏览记录', path : '/record' },
            { id : 3,  IconType : 'fa-thumbs-up', title : '陛下，赏个好评吧', path : '/review' },
            { id : 4,  IconType : 'fa-space-shuttle', title : '联系我们', path : '/contact' },
        ]
    }

    clickHandle (path) {
        console.log(path)
    }

    renderItem () {
        return this.state.dataItem.map( (item, i) => (
           
              
           < div key = {item.id} onClick = {() => {
                this.clickHandle(item.path)
           }}>
           {
               item.id==3 && <Space/>
           }
            <MoreItem  flag ={ item.id == 2 || item.id == 4} >
                    <Common.Icon type={ item.IconType + ' right-item'} ></Common.Icon>
                    <div className={"left-item"}>
                        <span style={{color : '#333',fontSize:'14px'}}>
                            {item.title}
                        </span>
                        
                        <Common.Icon type={"fa-angle-right"} style={{color : '#ccc',fontSize : '30px',paddingRight:'10px'}}></Common.Icon>
                    </div>
            </MoreItem>
            {
               item.id==2 && <Space/>
            }
            </div>
        )) 
    }

    render () {
        return (
            <MoreWrapper>
                <Common.Header>
                    更多
                </Common.Header>
                <Space/>
                {this.renderItem()}
            </MoreWrapper>
           
        )
    }
}

export default  MoreContainer ;