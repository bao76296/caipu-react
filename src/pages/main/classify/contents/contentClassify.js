import React , { Component } from 'react';
import BScroll from 'better-scroll';
import { 
    ContentClassifyWrapper,
    ClassifyItem
} from './styledComponent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
class ContentClassify extends Component {
    state = {
        active : 0
    }
    render () {
        return (
            <ContentClassifyWrapper ref = { el => this.el = el}>
                <div>
                    {this.renderItem()}
                </div>
            </ContentClassifyWrapper>
        )
    }

    changeActive (i) {
        this.props.changeActive(i)
        this.setState({
            active : i
        })
    }

    renderItem(){
        if(!this.props.classList) return ''
        let data = this.props.classList[ this.props.location.pathname === '/menu' ? 'category' : 'original'];
        return Object.keys(data).map( (item, i) => (
            <ClassifyItem onClick = {
               () => {
                this.changeActive(i)
               }
            } 
            active = { i === this.state.active }
             key = { i }><span>{item}</span>
             </ClassifyItem>
        )) 
    }

    componentDidMount () {
        
        new BScroll(this.el, {
            click : true,
            bounce: {
                top: true
            }
        })
    }

}
const mapStateTopros = (state) => {
    return {
        classList : state.main.hotClassifyList
    }
}

export default withRouter(connect(mapStateTopros)(ContentClassify));