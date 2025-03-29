import React from 'react';
import './index.css';
import yogaIcon from '../../assets/icons/yogaIcon.png';
import swimIcon from '../../assets/icons/swimIcon.png';
import bikeIcon from '../../assets/icons/bikeIcon.png';
import weightIcon from '../../assets/icons/weightIcon.png';

function VerticalNav() {
  return (
    <>
      <nav className="vertical-nav">
        {/* Liens de navigation */}
        <ul className="vertical-nav-links">
          <li>
            <img src={yogaIcon} alt="Yoga Icon" />
          </li>
          <li>
            <img src={swimIcon} alt="Swim Icon" />
          </li>
          <li>
            <img src={bikeIcon} alt="Bike Icon" />
          </li>
          <li>
            <img src={weightIcon} alt="Weight Icon" />
          </li>
        </ul>
      </nav>
      {/* Copyright */}
      <p className="vertical-nav-copyright">Copyright, SportSee 2020</p>
    </>
  );
}

export default VerticalNav;
