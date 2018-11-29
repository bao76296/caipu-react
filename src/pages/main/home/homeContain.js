import React , { Component } from 'react';

import HomeSwiper from './HomeSwiper';
import HomeHotClassify from './homeHotClassify'
import HomeBetter from './homeBetter'
import { HomeWrapper } from './styledComponent'
import * as common from '@C/common'
// import Icon from '@C/common/Icon';
import BScroll from 'better-scroll';
import { withRouter } from 'react-router-dom'


class HomeContainer extends Component {

    scroll = {
        tool : null
    }
    componentDidMount () {
        this.scroll.tool = new BScroll (this.el, {
            bounce  : {
                top : false
            },
            pullUpLoad: {
                threshold: 50
            },
            click : true
        })
    }

    render(){
        return (
            <HomeWrapper ref = { el => this.el = el }>
                <div>
                    <common.Header
                        // icon = {<Icon type = {'fa-camera-retro'}></Icon>}
                        // rightContent = {5555}
                    >菜谱大全</common.Header>
                    <HomeSwiper></HomeSwiper>
                    <common.Search type="home" onClick = {() => {
                    this.props.history.push('/list');
                 }}>想吃什么搜这里，如川菜</common.Search>
                    <HomeHotClassify></HomeHotClassify>
                    <HomeBetter scroll = {this.scroll}></HomeBetter>
                </div>
                
            </HomeWrapper>
          
        )
    }
}

export default withRouter(HomeContainer);