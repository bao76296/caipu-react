import React , { Component } from 'react';
import { ClassifyTabContainer } from './styledComponent'
import wrapperAnimate from '@C/common/Hoc/wrapper'
import ContentMenu from './contents/contentMenu';
class ClassifyFood extends Component {
    render () {
        return (
            
        <ClassifyTabContainer>
            <ContentMenu/>
        </ClassifyTabContainer>
        )
    }
}

export default wrapperAnimate(ClassifyFood);