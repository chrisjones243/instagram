import React, { Component } from 'react';

import ProfileHeader from './profile-header/index';
import Pictures from './pictures/index';
import './app.css';

import Header from './header/index';

const data = [
      {id:1, label: 'pic1'},
      {id:2, label: 'pic2'},
      {id:3, label: 'pic3'},
      {id:4, label: 'pic4'},
      {id:5, label: 'pic5'},
      {id:6, label: 'pic6'},
      {id:7, label: 'pic7'},
      {id:8, label: 'pic8'},
      {id:9, label: 'pic9'},
      {id:10, label: 'pic10'},
      {id:11, label: 'pic11'},
      {id:12, label: 'pic12'}
    ]

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header logoLabel="instagram" accountlabel="log out"/>

        <div className="main" >

          <ProfileHeader />
          <Pictures json={data}/>

        </div>


      </div>


    );
  }
}

export default App;
