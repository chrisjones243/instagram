import React from 'react';
import './pictures.css';



class Pictures extends React.Component {
    renderPictures() {
      return this.props.json.map(picture=> {
        console.log('>',picture)
        return <div className="picture">{picture.label}</div>

      })
    }
    
    render() {
      return(
            <div className="pictures content-wrapper">
              {this.renderPictures()}
            </div>
          )
    }
      
    
 }


export default Pictures;
