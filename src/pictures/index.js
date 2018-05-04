import React from 'react';
import './pictures.css';



class Pictures extends React.Component {
    renderPictures() {
      return this.props.json.map(picture=> {
        return (
          <div key={picture.node.id} className="picture">
            <a href={picture.node.display_url}>
              <img src={picture.node.thumbnail_src} width="100%" />
            </a>
          </div>
        )
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
