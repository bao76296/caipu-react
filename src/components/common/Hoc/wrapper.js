import React , { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

const wrapperAnimate = (UiComponent) => {
    return class extends Component {
       
        render () {
            let pathname = this.props.location.pathname;
            return (
                <CSSTransition
                    in = { !!this.props.match }
                    timeout={500}
                    classNames={{
                        enter : 'animated faster',
                        enterActive : `${ pathname === '/menu' ? 'slideInRight' : 'slideInLeft'}`,
                        exit: 'animated faster',
                        exitActive: `${ pathname !== '/menu' ? 'slideOutRight' : 'slideOutLeft'}`,
                    }}
                    mountOnEnter = {true}
                    unmountOnExit = {true}
                >
                    <UiComponent {...this.props} />
                </CSSTransition>
            )
        }
    }
    // return class extends Component {
        
    //     render () {
    //         console.log(this.props)
    //         let { location, match } = this.props
    //         // 取出路由中保留的方向状态，准备添加对应的类名~
    //         let state = this.props.location.state || { dir: 'left' }
    //         let { dir } = state
    //         return (<CSSTransition
    //                     in = { !!match }
    //                     classNames={{
    //                         enter: 'animated faster',
    //                         enterActive: dir === 'left' ? 'slideInRight' : 'slideInLeft',
    //                         exit: 'animated faster',
    //                         exitActive: dir === 'left' ? 'slideOutLeft' : 'slideOutRight'
    //                     }}
    //                     mountOnEnter = {true}
    //                     unmountOnExit = {true}
    //                     timeout={300}
    //                 >
    //                     <UiComponent {...this.props}/>
    //                 </CSSTransition>
    //         )
    //     }
    // }
}
export default wrapperAnimate;