import React from 'react';
import "./header.css";

class Header extends React.Component{
  render() {
    return(
      <div className="Header">
        <div className="inner-header content-wrapper">
          <div className="logo">{this.props.logoLabel}</div>
          <div className="Account">{this.props.accountlabel}</div>
        </div>
      </div>
    )
  }
}
export default Header;
