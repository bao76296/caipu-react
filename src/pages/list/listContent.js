import React , { Component } from 'react';
import ReactDOM from 'react-dom'
import {
    ListConentWrapper,
    ListItem,
    ListItemRight
} from './styledComponent'
import axios from 'axios';
import { PullToRefresh, ListView, Button } from 'antd-mobile';



class ListContent extends Component {

    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
        
        this.tempData = [];
        this.state = {
          dataSource,
          refreshing: true,
          isLoading: true,
          height: document.documentElement.clientHeight,
          dataList : null,
          useBodyScroll: false,
        };
      }
    
      pageIndex = 0;
      pageSize = 10;

      getListdata () {
        console.log(this.state.height ,ReactDOM.findDOMNode(this.lv).offsetTop)
        // const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        axios.get('/mock/cookbook-list.json').then( res => {
            let data = res.data.data.slice( this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize)
            console.log(data)
            this.pageIndex ++;
            // console.log(this.state.dataSource._dataBlob.s1)
            // let temp = this.state.DataSource  ? this.state.dataSource._dataBlob.s1  :  [];
            this.tempData = [...this.tempData , ...data]
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.tempData),
                // height: hei,
                refreshing: false,
                isLoading: false,
            });
        })
      }


      componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        this.getListdata();
      
      }
    
      onRefresh = () => {
        this.setState({ refreshing: true, isLoading: true });
        // simulate initial Ajax
        this.pageIndex = 0;
        this.getListdata();

      };
    
      onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        // console.log('reach end', event);
        this.setState({ isLoading: true }); 

        this.getListdata()

      };

      row = (rowData, sectionID, rowID) => {
        return (
           <ListItem key = { rowData.id }>
              <img src={rowData.img} />
              <ListItemRight>
                  <h1>{rowData.name}</h1>
                  <h4>{rowData.burdens}</h4>
                  <p>{rowData.all_click}浏览 &nbsp;&nbsp;{rowData.favorites}收藏</p>
              </ListItemRight>
          </ListItem>
        );
      };







    render() {
        
       

        return (
        <ListConentWrapper>
          <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={this.row}
            
            useBodyScroll={false}
            style={this.state.useBodyScroll ? {} : {
              height: this.state.height,
              border: '1px solid #ddd',
              margin: '5px 0',
            }}
            pullToRefresh={<PullToRefresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
                indicator = {{
                  activate: '放手就刷新', // 已经扯出来
                  deactivate: '下拉去刷新', // 没有拉出来
                  release: '请稍等...', //  开始转
                  finish: '已经加载了新的数据' // 完成
              }}
            />}
            onEndReached={this.onEndReached}
            pageSize={1}
          />
        </ListConentWrapper>);
      }
}

export default ListContent