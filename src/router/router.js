import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from "../views/home/home";
import ModuleFirst from "../views/module/moduleFirst";
import ModuleSecond from "../views/module/moduleSecond";
import ModuleThird from "../views/module/moduleThird";

class AsideRoutes extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
 
  componentDidMount() { }
  
  render(){
    return (
      <div>
        <Route path="/home" component={Home}></Route>
        <Route path="/module1" component={ModuleFirst}></Route>
        <Route path="/module2" component={ModuleSecond}></Route>
        <Route path="/module3" component={ModuleThird}></Route>
      </div>
    )
  }
}

export default AsideRoutes;