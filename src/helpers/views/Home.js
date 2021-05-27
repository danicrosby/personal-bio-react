import React from 'react';
import profile from '../../styles/assets/profile.jpg';
import about1 from '../../styles/assets/about1.png';

export default function Home() {
  return (
    <div className="jumbotron">

      <nav className="navbar col-mb-4 navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav flex-column mb-2 mb-lg-0">
              <a className="nav-link" href="">Contact</a>
              <a className="nav-link" href="https://poshmark.com/closet/danilionclosets">Business</a>
              <a className="nav-link" href="https://www.linkedin.com/in/dani-crosby/">LinkedIn</a>
              <a className="nav-link" href="https://github.com/danicrosby">Github</a>
              <a className="nav-link" href="https://danicrosby.medium.com/">Medium</a>
              <a className="nav-link" href="/Resume.pdf">Resume</a>
              <a className="nav-link contact" href="">dani.crosby1111@gmail.com</a>
              <a className="nav-link contact" href="">925.588.4948</a>
            </ul>
          </div>
        </div>
      </nav>

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
