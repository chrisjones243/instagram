import React from 'react';
import "./header.css";

const Header = (props) => (
    <div className="Header">
      <div className="inner-header content-wrapper">
        <div className="logo">{props.logoLabel}</div>
        <div className="Account">{props.accountlabel}</div>
      </div>
    </div>
  )


export default Header;
