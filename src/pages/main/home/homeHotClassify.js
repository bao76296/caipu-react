import React , { Component } from 'react';
import { HomeHotClassifyWrapper , HomeHotClassifyTitle , HomeHotClassifyItem} from './styledComponent'
import { Grid } from 'antd-mobile';

import { connect } from 'react-redux';
import action from '@Store/main/action'
class HomeHotClassify extends Component{
    
    componentWillMount(){
        this.props.hotClassifyList();
    }

    data () {
        if(this.props.hotClassifyListData){
            
            let hotList = this.props.hotClassifyListData.category["热门"];
            hotList = hotList.splice(0,12);
            return hotList.map( item => {return {
                text : item
            }})
        }
    }
    
    render () {
        return (
            <HomeHotClassifyWrapper>
                <HomeHotClassifyTitle>热门分类</HomeHotClassifyTitle>
                <Grid 
                data={this.data()} 
                activeStyle={false}
                columnNum={4}
                itemStyle={{height:'50px'}}
                renderItem={dataItem => (
                    <HomeHotClassifyItem as='a'  href ="http://baidu.com">
                        {dataItem.text}
                    </HomeHotClassifyItem>
                  )}
                 />
            </HomeHotClassifyWrapper>
        )
        
    }
}

const mapStateToProps = (state) =>{
    return {
        hotClassifyListData : state.main.hotClassifyList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hotClassifyList () {
            dispatch(action.hotClassifyList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHotClassify)