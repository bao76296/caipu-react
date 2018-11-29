import styled from 'styled-components';

export const ListWrapper = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
   overflow : hidden;
`

export const ListConentWrapper = styled.div`
    height : 100%;
    width:100%;
`

export const ListItem =styled.div`
    height : 100px;
    width :100%;
    padding : 10px 11px;
    display : flex;
    background : #f5f5f5;
    align-items : center;
    img {
        height : 75px;
        width : 115px;
    }
    border-bottom : 1px solid #dedede;
`

export const ListItemRight = styled.div`
    height : 75px;
    margin-left : 20px;
    width : 214px;
    display : flex;
    flex-direction : column;
    h1{
        padding : 2px 0;
        font-size : 16px;
        color : #121212;
       
    }
    h4{
        margin : 9px 0;
        font-size:14px;
        color : #b4b4b4;
        text-overflow : ellipsis;
        overflow:hidden;
        white-space : nowrap;
    }
    p{
        font-size:12px;
        color : #b4b4b4;
        margin : 3px 0;
    }
`
