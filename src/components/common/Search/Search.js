import React , { Component } from 'react';
import { SearchWrapper , SearchBox } from './styledComponent'
import * as img from '@As/images'
class Search extends Component {
    render () {
        return (
            <SearchWrapper { ...this.props }>
                <SearchBox { ...this.props }>
                    <img src = {img.search}/>
                    <p>{this.props.children}</p>
                </SearchBox>
            </SearchWrapper>
            
        )
    }
}

export default Search