import React , { Component } from 'react';
import { ClassifyTabContainer } from './styledComponent'
import wrapperAnimate from '@C/common/Hoc/wrapper'
import ContentMenu from './contents/contentMenu';
class ClassifyMenu extends Component {
    render () {
        return (
            
        <ClassifyTabContainer>
               <ContentMenu/>
        </ClassifyTabContainer>
          
        )
    }
}

export default wrapperAnimate(ClassifyMenu);