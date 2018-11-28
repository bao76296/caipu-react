import styled from 'styled-components';
import config from '@As/style/config'
export const HeaderContainer = styled.header`
    width : 100%;
    height : 1.173333rem;
    background :  ${config.baseColor};
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 0rem .24rem;
    .left, .center, .right {
        font-size : .48rem;
        color : #fff;
    }
    z-index : 2;
`