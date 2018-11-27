import React , { Component } from 'react';
import axios from 'axios';

import { 
    BetterContainer,
    BetterTitle,
    BetterContent,
    BetterItem
} from './styledComponent'
class HomeBetter extends Component{

    state = {
        list : []
    }
    
    allList = [];

    getItemsAsync () {
        return  axios.get('/mock/cookbook-list.json').then(res => {
            this.allList = res.data.data;
            this.setItems();
        })
    }

    setItems () {
        this.setState({
            list : [...this.state.list, ...this.allList.splice(0,10)]
        })
    }

    

    componentDidMount () {
        this.getItemsAsync();
        setTimeout( () => {
            let { tool } = this.props.scroll;
            tool.on('pullingUp', () => {
                if(this.allList.length > 0){
                    this.setItems();
                }
                tool.finishPullUp();
            })
            // this.setState()
            
            
        },0)
    }
    
    componentDidUpdate (props,state) {
        if(this.state.list !== state.list) {
            this.props.scroll.tool.refresh();
        } 
    }

    renderItem () {
        return this.state.list.map( item => (
            <BetterItem key ={item.id}>
                <img src={item.img} alt=""/>
                <div className="title">
                    <h1>
                        {item.name}
                    </h1>
                    <p>
                        {item.favorites}喜欢，{item.favorites}收藏
                    </p>
                </div>
            </BetterItem> 
        ))
    }

    render () {
        return (
            <BetterContainer>
                <BetterTitle>精品好菜</BetterTitle>
                <BetterContent>
                    {this.renderItem()}
                </BetterContent>
            </BetterContainer>
        )
    }
}

export default HomeBetter;