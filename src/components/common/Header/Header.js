import React , { Component } from 'react';
import { HeaderContainer } from './styledComponents';

class Header extends Component {

  

    render () {
        return (
            <HeaderContainer>
                <div className="right">{this.props.icon}</div>
                <div className = "center">{this.props.children}</div>
                <div className="left">{this.props.rightContent}</div>
            </HeaderContainer>
        )
    }
}

export default Header