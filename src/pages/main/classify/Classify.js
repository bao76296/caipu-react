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
        console.log(props)
        console.log(this.props)
       if(props.location.pathname === '/' && this.props.pathname !== '/menu' ){
           console.log(props)
           console.log(this.props)
           
        return false;
       } 
       
       return true;
    }

    render () {
        let pathname = this.props.location.pathname;
        return (
            <ClassWrapper>
                    <common.Header>
                        <ClassifyNavBar>
                        </ClassifyNavBar>
                    </common.Header>
                    <common.Search type="classify">想吃什么搜这里，如排骨</common.Search>
                    <ClassifyTabbox>
                        <TransitionGroup>
                            <CSSTransition
                                key={this.props.history.location.key}
                                timeout={500}
                                classNames={{
                                    enter : 'animated faster',
                                    enterActive : `${ pathname === '/menu' ? 'slideInRight' : 'slideInLeft'}`,
                                  
                                    // enterActive : 'slideInLeft',
                                    exit: 'animated faster',
                                    exitActive: `${ pathname !== '/menu' ? 'slideInRight' : 'slideInLeft'}`,
                                }}
                            >
                               <>
                                    <Route path = "/" exact render = {() => {
                                                console.log(123);
                                                return <Redirect to = "/food" />
                                            }} />
                                    <Route path ="/menu" component= {ClassifyMenu} ></Route>
                                    <Route path ="/food" component= {ClassifyFood} ></Route>
                               </>
                                    
                               
                            </CSSTransition>
                        </TransitionGroup>
                    </ClassifyTabbox>
            </ClassWrapper>
           
           
            
        )
    }
}

export default withRouter(Classify);