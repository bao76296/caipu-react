import React , { Component,PureComponent } from 'react'
import uuid from 'uuid'
import { TabBar } from 'antd-mobile';
import {
  MainWrapper,
  MainTabIcon
} from './styledComponent'
import { withRouter } from 'react-router-dom'

import  * as img from '@As/images'
import HomeContainer from './home/homeContain'
import Classify from './classify/Classify';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cook',
      historyPathname : '',
      tabs : [
        { id : uuid(), title : '菜谱大全',selected : 'cook', icon : img.cookbook, selectedIcon : img.cookbookActive, component : <HomeContainer/>   },
        { id : uuid(), title : '分类',selected : 'menu', icon : img.menu, selectedIcon : img.menuActive, component : <Classify/>  },
        { id : uuid(), title : '地图',selected : 'map', icon : img.location, selectedIcon : img.locationActive, component : 'map'  },
        { id : uuid(), title : '更多',selected : 'more', icon : img.more, selectedIcon : img.moreActive, component : 'more'  }
      ]
    };
  }

  // shouldComponentUpdate (props, state) {
  //   if(this.state.selectedTab !== 'menu' && this.props.location.pathname  !== props.location.pathname ) return false ;
  //   return true
  // }



  componentDidUpdate(props, state) {
    console.log(333) //  组件刷新问题。   路由的父组件发现 需要更新路由。然后需要渲染  这时调用的 父组件的方法，来重新渲染，父组件属性变化 当前这个路由组件是否会 重新render 以及自路由会不会重新render  
    if(state.selectedTab === 'menu' && this.state.selectedTab !== 'menu' ){
        // this.setState({
        //   historyPathname : props.location.pathname
        // })
        this.props.history.replace('/')
    }
    // if(this.state.selectedTab == 'menu' && state.selectedTab === 'cook' ){
    //   this.props.history.push(this.state.historyPathname)
    // }
    if(this.state.selectedTab == 'menu' && state.selectedTab !== 'menu' ){
      this.props.history.push('/menu')
    }
  }
  

  rrenderItemTabx () {
    console.log(666);
    return this.state.tabs.map( tab => 
            <TabBar.Item
              title = {tab.title}
              key = { tab.id }
              icon={<MainTabIcon url = { tab.icon }/>}
              selectedIcon={<MainTabIcon url = { tab.selectedIcon } />}
              selected={this.state.selectedTab ===  tab.selected }
              onPress={() => {
                this.setState({
                  selectedTab:  tab.selected ,
                });
              }}
              data-seed="logId"
            >
            {tab.component}
            </TabBar.Item>
          )
  }
    

  render() {
    return (
    
      <MainWrapper>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="rgb(247,247,247)"
          prerenderingSiblingsNumber = '0'
        >
         { this.rrenderItemTabx() }
        </TabBar>
        </MainWrapper>
     
    );
  }
}

export default withRouter(MainContainer);