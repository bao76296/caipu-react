import React , { Component } from 'react';
import ContentClassify from './contentClassify';
import ContentItem from './contentItem';
import { ContentMenuWrapper } from './styledComponent';
import { connect }  from 'react-redux';
import action from '@Store/main/action.js'

class ContentMenu extends Component {
    state = {
        activeIndex  : 0
    }

    componentWillMount () {
       if(!this.props.hotClassifyList){
            this.props.gethotClassifyList();
       }
    }
  
    render () {
        return (
            <ContentMenuWrapper>
                <ContentClassify activeIndex={this.state.activeIndex} changeActive={(index)=> { this.setState({ activeIndex : index }) }} />
                <ContentItem activeIndex={this.state.activeIndex} />
            </ContentMenuWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allList : state.main.hotClassifyList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        gethotClassifyList () {
            dispatch(action.hotClassifyList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentMenu);