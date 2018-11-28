import styled from 'styled-components';

export const ContentMenuWrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
`
export const ContentClassifyWrapper = styled.div`
    width : 35%;
    height : 100%;

`
export const ItemItembox = styled.div`
    width : 100%;
    display : flex;
    flex-wrap : wrap;
    border-bottom : 1px solid #f0f0f0;
`

export const ItemItemWarpper = styled.div`
    height : 48px;
    width : 33.33%;
    color : #4a4a4a;
    font-size: 14px;
    display : flex;
    align-items : center;
    justify-content : center;
    
`
export const ItemTitle = styled.div`
    height : 48px;
    width : 100%;
    flex-grow : 1;
    flex-shrink : 1;
    color : #333;
    font-size : 16px;
    line-height:48px;
    padding-left : 10px;
    
`

export const ContentItemWrapper = styled.div`
    width : 75%;
    height : 100%;
   
    background : #fff;
`

export const ClassifyItem = styled.div`
    height : 48px;
    display : flex;
    font-size : 14px;
    algin-item : center;
    justify-content : center;
    color : ${ props => props.active ? '#eb7932' : '#4a4a4a' };
    ${props => props.active ? 'background : #fff;' : '' };
    span {
        display : inline-block;
        height : 100%;
        line-height : 48px;
        border-bottom : 2px solid ${ props => props.active ? '#eb7932' : '#f3f3f3' };
    }
`

