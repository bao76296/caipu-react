import React , { Component } from 'react';
import {
    ListWrapper
} from './styledComponent';
import * as Common from '@C/common'
import ListContent from './listContent';

class List extends Component{
    render () {
        return (
            <ListWrapper>
                <Common.Header icon = {
                    <Common.Icon onClick = {()=>{
                        console.log(this.props.history.goBack())
                        }} type = {'fa-chevron-left'} ></Common.Icon>
                    } 
                    rightContent = {
                        <div>搜索</div>
                    }
                >
                 <Common.SearchHead>
                     <Common.Icon type = {"  fa-search"}/>
                     <span>请搜索</span>
                 </Common.SearchHead>
                </Common.Header>
                <ListContent/>
            </ListWrapper>
        )
    }
}

export default List