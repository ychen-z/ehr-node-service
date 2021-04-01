import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getHomeList, onclick } from './store/actions';
import { Helmet } from 'react-helmet';
import styles from './style.css';
import WithStyle from '../../WithStyle';

class Home extends Component {
  constructor(props){
    super(props);
  }
  getList() {
    const { list } = this.props
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }

 

  render() { 
    return (
      <Fragment>
        <Helmet>
          <title>前端公共服务</title>
          <meta name="description" content="前端公共服务"/>
        </Helmet>
        <div className="test">
          {
            this.getList()
          }
        </div>
      </Fragment>
    )
  }

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList,
});
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  },
});
const exportHome = connect(mapStateToProps, mapDispatchToProps)(WithStyle(Home, styles));

exportHome.loadData = (store) => {
  return store.dispatch(getHomeList())
};

export default exportHome;