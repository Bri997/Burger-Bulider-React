import React, { Component, Fragment } from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  
  state = {
    showSideDrawer: true
  }
  SideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }
  render() {
    return (
      <Fragment>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed ={this.SideDrawerClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
