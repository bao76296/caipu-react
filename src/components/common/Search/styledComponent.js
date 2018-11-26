import styled from 'styled-components'

export const SearchWrapper = styled.div`
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