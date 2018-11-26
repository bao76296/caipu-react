import React , { Component } from 'react';

import HomeSwiper from './HomeSwiper';
import HomeHotClassify from './homeHotClassify'
import { HomeWrapper } from './styledComponent'
import * as common from '@C/common'
// import Icon from '@C/common/Icon';

class HomeContainer extends Component {
    render(){
        return (
            <HomeWrapper>
                <common.Header
                    // icon = {<Icon type = {'fa-camera-retro'}></Icon>}
                    // rightContent = {5555}
                >菜谱大全</common.Header>
                <HomeSwiper></HomeSwiper>
                <common.Search type="home">想吃什么搜这里，如川菜</common.Search>
                <HomeHotClassify></HomeHotClassify>
            </HomeWrapper>
          
        )
    }
}

export default HomeContainer;