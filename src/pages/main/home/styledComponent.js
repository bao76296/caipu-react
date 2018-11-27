import styled from 'styled-components';

export const HomeSwiperWrapper = styled.div`
    width : 100%;
    height : 6.666667rem;
    img  {
        width : 100%;
        height : 100%;
    }
`

export const HomeWrapper = styled.div`
    width: 100%;
    height:617px; 
    overflow : hidden;
`

export const HomeHotClassifyWrapper = styled.div`
    width : 100%;
    background : white;
    font-size:15px;
    > .am-grid{
        width: 100%;
        font-size:15px;
        color: #282828;
    }
    .am-grid-item-content{
        padding : 0 !important;
        height:50px !important;
    }
`
export const HomeHotClassifyTitle = styled.div`
    height : 50px;
    display : flex;
    align-items : center;
    color : #919191;
    margin-left : 10px;
`

export const HomeHotClassifyItem = styled.div`
    font-size:15px;
    color : #313131;
    line-height:50px;
    font-weight:700;
`
///
export const BetterContainer = styled.div`
    padding : 12px 12px;
`

export const BetterTitle = styled.div`
    height : 50px;
    display : flex;
    align-items : center;
    color :#999;
    margin-left : 10px;
`

export const BetterContent = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
`
export const BetterItem = styled.div`
    width : 170px;
    margin-bottom : 12px;
    img {
        width : 100%;
        height : 170px;
    }
    .title {
        background:white;
        height:60px;
        display : flex;
        flex-direction : column;
        justify-content:center;
        align-items : center;
        h1{
            color : #333;
            font-size : 16px;
            margin-bottom:7px;
        }
        p {
            font-size : 12px;
            color : #989898;
        }
    }
`
