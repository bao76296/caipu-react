import React from 'react';

export default props => {
    return <i {...props}  className = {'fa ' +  props.type}></i>
}