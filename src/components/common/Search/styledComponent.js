import styled from 'styled-components'

export const SearchWrapper = styled.div`
    z-index:2;
    padding : 0.32rem 0.4rem;
    background : ${props => props.type == 'home' ? `#f5f5f5` : `#fff`  }   ;
`

export const  SearchBox = styled.div`
    height : 1.066667rem;
    width : 100%;
    background : ${props => props.type == 'home' ?  `#fff` : `#efefef`  };
    border-radius : 0.133333rem;
    border : 0.026667rem solid ${props => props.type == 'home' ?  `#ba8456` : `#efefef`  } ;
    display : flex;
    align-items : center;
    justify-content : center;
    img { 
        height : 0.48rem;
        width : 0.48rem;
    }
    p {
        font-size : 0.346667rem;
        color : #989898;
        margin-left : 0.133333rem;
    }
    
`

export const SearchHeadBox = styled.div`
    
    height : 30px;
    width : 280px;
    border-radius : 5px;
    background : #d46027;
    display : flex;
    align-items : center;
    color : #fff;
    padding-left : 8px;
    span{
        display : inline-block;
        padding-left : 8px;
        color : #fff;
        font-size : 14px;
    }
`
