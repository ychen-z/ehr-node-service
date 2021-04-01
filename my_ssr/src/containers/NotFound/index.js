import React from 'react';
import { connect } from 'react-redux';
import { onclick } from '../Home/store/actions';
const Notound = props => {
  const { staticContext, list } = props;
  staticContext && (staticContext.NotFound = true)
  console.log(list);
 const onclick=()=>{
    props.onclick(1);
  }

  return (
    <div>
      <div>
        {list.list1}
        <button onClick={onclick}>接口调用</button>
      </div>
    </div>
  );
}
 

const mapStateToProps = state => ({
  list: state.home.newsList,
});
const mapDispatchToProps = dispatch => ({
  onclick(id){
    dispatch(onclick(id))
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Notound);