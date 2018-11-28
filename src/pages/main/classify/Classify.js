import React , { Component } from 'react';
import ClassifyNavBar from './ClassifyNavBar';
import { ClassWrapper ,ClassifyTabbox } from './styledComponent';
import { Route,Redirect,withRouter, Switch } from 'react-router-dom'
import * as common from '@C/common'
import ClassifyMenu from './ClassifyMenu';
import ClassifyFood from './ClassifyFood'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Classify extends Component {
    
    shouldComponentUpdate (props) {
       if(props.location.pathname === '/' && (this.props.pathname !== '/menu' || this.props.pathname !== '/food') ){ 
        return false;
       } 
       return true;
    }

    render () {
        
        return (
            <ClassWrapper>
                    <common.Header>
                        <ClassifyNavBar>
                        </ClassifyNavBar>
                    </common.Header>
                    <common.Search type="classify">想吃什么搜这里，如排骨</common.Search>
                    <ClassifyTabbox>
                        <Route path ="/menu" exact children= {(props) => <ClassifyMenu {...props} />} ></Route>
                        <Route path ="/food" exact children= {(props) => <ClassifyFood {...props} />}></Route>
                    </ClassifyTabbox>
            </ClassWrapper>
           
           
            
        )
    }
}

export default withRouter(Classify);