import React from 'react';
import "./pictures.css";

class Pictures extends React.Component{
  render() {
    return(
      <div className="Pictures content-wrapper">
        <div className="Pictures-row">
          <div className="Picture">picture 1</div>
          <div className="Picture">picture 2</div>
          <div className="Picture">picture 3</div>
        </div>
      </div>
    )
  }
}
export default Pictures;
