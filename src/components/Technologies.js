import React from 'react';
import postman from '../styles/assets/postman.png';
import netIcon from '../styles/assets/netIcon.png';
import netlify from '../styles/assets/netlify.png';
import terminal from '../styles/assets/terminal.png';
import cSharp from '../styles/assets/cSharp.png';
import code from '../styles/assets/code.png';
import firebaseIcon from '../styles/assets/firebaseIcon.png';

export default function Technologies() {
  return (
    <div className="icon-container p-5"><h2>Technologies Used</h2>
      <div className="icon-wrapper mx-auto p-5">
        <div>
          <i className="fab fa-github tech-icons fa-8x"></i>
          <i className="fab fa-html5 tech-icons fa-10x"></i>
          <i className="fab fa-css3 tech-icons fa-6x"></i>
          <i className="fab fa-react tech-icons fa-9x"></i>
          <i className="fab fa-js tech-icons fa-8x"></i>
          <i className="fab fa-sass tech-icons fa-10x"></i>
          <i className="fas fa-video tech-icons fa-4x"></i>
        </div>
        <div>
          <img className="img-icon1" src={netIcon} />
          <img className="img-icon2" src={postman} />
          <img className="img-icon3" src={netlify} />
          <img className="img-icon4" src={cSharp} />
          <img className="img-icon5" src={terminal} />
          <img className="img-icon6" src={code} />
          <img className="img-icon7" src={firebaseIcon} />
        </div>
      </div>
    </div>
  );
}
