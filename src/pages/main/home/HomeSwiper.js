import React , { Component } from 'react';
import { HomeSwiperWrapper } from './styledComponent';
import * as img from '@As/images';
import { connect } from 'react-redux';
import main_action from '@Store/main/action';
import { Carousel } from 'antd-mobile';
class HomeSwiper extends Component {

    componentWillMount () {
        this.props.getListAsync();
    }

    displaySwiper(){
        let list = this.props.list.splice(0,5)
        if(list.length<=0) return '';
        return list.map(item => (
           
            <img
                key = {item.id}
                src={item.img}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
            />
           
        ))
    }

    render () {
        return (
            <HomeSwiperWrapper>
              
                    <Carousel
                        autoplay={false}
                        infinite
                        >
                        {
                            this.displaySwiper()
                        }
                    </Carousel>
               
            </HomeSwiperWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list : state.main.list
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
    getListAsync () {
            dispatch(main_action.getList())
       }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeSwiper)