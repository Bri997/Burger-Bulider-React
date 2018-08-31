import React, { Component, Fragment } from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
