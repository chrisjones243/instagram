import React, { Component } from 'react';

import ProfileHeader from './profile-header/index';
import Pictures from './pictures/index';
import './app.css';

import Header from './header/index';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header logoLabel="instagram" accountlabel="log out"/>

        <div className="main" >

          <ProfileHeader />
          <Pictures />

        </div>


      </div>


    );
  }
}

export default App;
