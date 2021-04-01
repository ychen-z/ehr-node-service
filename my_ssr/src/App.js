import React from 'react';
import Header from './components/Header';
import Button from "antd/lib/button";
import { renderRoutes } from 'react-router-config';
import  "./index.less"

const App = (props) => {
  
  const onclick = ()=> {
    alert('1')
  }
  
  return (
    <div className="app" >
      <Header></Header>
      <Button type="primary" onClick={onclick}>点击事件1222</Button>
      {renderRoutes(props.route.routes)}
    </div>
  )
};

export default App;