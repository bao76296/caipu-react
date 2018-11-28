import styled from 'styled-components';

export const ClassWrapper = styled.div`
    width : 100%;
    height: 100%;
    display : flex;
    flex-direction : column;
    overflow : hidden;
`

export const  ClassifyContainer = styled.div`
    height : 30px;
    width : 143px;
    color : #ee7530;
    border: 1px solid #fff;
    display : flex;
    justify-content : space-around;
    align-items : center;
    border-radius : 20px;
    position : relative;
`

export const ClassifyBarItem = styled.div`
    font-size : 14px;
    color :${props => props.active ? `#ee7530` : `#fff` } ;
    z-index: 2;
    transtion : all 0.3s;
`
export const ClassifySlider = styled.div`
    height : 100%;
    width : 50%;
    background : #fff;
    position : absolute;
    top : 0;
    left : ${props => props.type === '/menu' ? `0` : `50%`};
    transition : all 0.3s;
    border-radius : 20px;
    z-index:1;
`
export const ClassifyTabbox = styled.div`
    
    position : relative;
    width:100%;
   
    flex-grow: 1;
    flex-shrink: 1;
`


export const ClassifyTabContainer = styled.div`
    position : absolute;
    top:0;
    left : 0;
    width : 100%;
    height : 100%;
`
