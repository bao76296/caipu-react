import React , { Component } from 'react';
import { ClassifyContainer , ClassifyBarItem , ClassifySlider} from './styledComponent';
import { withRouter } from 'react-router-dom'
class ClassifyNavBar extends Component{
    state = {
        type : this.props.location.pathname
    }
    componentWillReceiveProps(props){
       this.setState({
           type : props.location.pathname
       })
    }
    render () {
        return (
            <ClassifyContainer>
                <ClassifyBarItem active={this.state.type === '/menu'} 
                    onClick = { () => this.changeType('menu')}
                >分类</ClassifyBarItem>
                <ClassifyBarItem active={this.state.type === '/food'}
                    onClick = {() => this.changeType('food')}
                >食材</ClassifyBarItem>
                <ClassifySlider type={this.state.type} />
            </ClassifyContainer>
        )
    }

    changeType (type) {
        this.props.history.push({pathname : type})
    }

}
export default withRouter(ClassifyNavBar);