import styled from 'styled-components';

export const HomeSwiperWrapper = styled.div`
    width : 100%;
    height : 6.666667rem;
    img  {
        width : 100%;
        height : 100%;
    }
`

export const HomeWrapper = styled.section`
    width: 100%;
    height:100%; 
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