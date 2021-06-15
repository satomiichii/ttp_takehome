import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

export const Footer = (props) => {
  return (
    <div className="footer-container">
      <FontAwesomeIcon icon={faPaw} />
      <div>Neko.com 2021</div>
    </div>
  );
};
