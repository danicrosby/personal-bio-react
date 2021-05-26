import React from 'react';
import profile from '../styles/assets/profile.jpg';
import about1 from '../styles/assets/about1.png';

export default function About() {
  return (

    <div className="jumbotron">

      <div className="col-lg-4 col-md-3 col-sm-2 image-container">
        <img className="profile-image" src={profile} />
      </div>

      <div className="col-lg-4 col-md-3 col-sm-2">
        <div id="title">hello,</div>
        <div id="sub-title">THERE</div>

        <div className="row">
          <div className="col-2">
            <img className="about-img" src={about1} />
          </div>
          <div className="col">
            <p id="about-me-paragraph">
              My name is Dani Crosby. I am a student
            studying Javascript, React, C#, and .NET at Nashville Software School.
            I have a background in home organization, welding, and as a
            small business owner. I hope to integrate my new software skills, passion for simplicity,
            and workflow efficiency at a local Nashville company.
            I enjoy all things outdoors, interior design, senior dogs, and driving across the country.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
