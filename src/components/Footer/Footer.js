import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { IconContext } from "react-icons";
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <IconContext.Provider value={{ size: '20px', margin: '10px', className: 'icons' }}>
        <SiInstagram />
        <FaLinkedinIn />
        <FaYoutube />
        <FaFacebookF />
        <FaTwitter />
      </IconContext.Provider>
      <div className='usa-location'>
        Camino Verde | 23 Southfield Cr. | Concord, MA 01742 | USA
      </div>
      <div className='peru-location'>
        Camino Verde Tambopata | Jr. Nicolás de Piérola Mz. 12w Lt. 9B | Puerto Maldonado, Madre de Dios 17001 | Peru
      </div>
    </div>
  )
}

export default Footer