import React , { Component } from 'react';
import { ContentItemWrapper } from './styledComponent'
import { connect} from 'react-redux';
import uuid from 'uuid'
import { 
    ItemItemWarpper,
    ItemTitle,
    ItemItembox

} from './styledComponent'
import BScroll from 'better-scroll'
import { withRouter } from 'react-router-dom'

class ContentItem extends Component {
    
    componentWillReceiveProps(props){
        if( this.props.activeIndex !== props.activeIndex){
            this.scroll.scrollToElement(this.els[props.activeIndex],300)
        }
    }

    renderItem () {
        this.els = [];
        
        if(!this.props.classList) return '';
        
        let data = this.props.classList[ this.props.location.pathname === '/menu' ? 'category' : 'original'];
        let results = [];
        for(var keys in data){
            results.push(
                (
                <ItemItembox key={uuid()} ref= { el => {
                    if(!this.el)
                    this.els.push(el)
                }}>
                    <ItemTitle>{keys}</ItemTitle>
                    {
                         data[keys].map( (item, i) => (
                            <ItemItemWarpper key={i}>{item}</ItemItemWarpper>
                        ))
                    }
                </ItemItembox>
                )
            )
           
        }
        return results;
    }
    componentDidMount (){
        console.log(this.props)
        this.scroll = new BScroll (this.el, {
            click : true
        })
    }
    render () {
        return (
            <ContentItemWrapper ref = {el => this.el = el}>
                <div>
                    {this.renderItem()}
                </div>
            </ContentItemWrapper>
        )
    }
}

const mapStateTopros = (state) => {
    return {
        classList : state.main.hotClassifyList
    }
}

export default withRouter(connect(mapStateTopros)(ContentItem));