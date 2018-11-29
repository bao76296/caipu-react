import styled from 'styled-components';

export const MoreWrapper = styled.div`
    width : 100%;
    height : 100%
`

export const MoreItem = styled.div`
    width : 100%;
    height : 52px;
    background : #fff;
    display : flex;
    align-items : center;

    .right-item{
       margin : 0 18px;

       font-size : 20px;
       color : red;
    }

    .left-item {
        width : 100%;
        height : 100%;
        display : flex;
        ${ props => !props.flag ? 'border-bottom : 1px solid #e0e0e0;' : '' }
       
        justify-content : space-between;
        align-items : center;
    }
`
export const Space = styled.div`
    height : 15px;
    width : 100%;
`