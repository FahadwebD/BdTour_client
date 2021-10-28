import React from 'react';

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt , faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faFacebookF  } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {

   

    const map = <FontAwesomeIcon icon={faMapMarkerAlt} className='styling' />
    const telephone = <FontAwesomeIcon icon={faPhone} className='styling' />
    const envelope = <FontAwesomeIcon icon={faEnvelope} className='styling' />
    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    return (
        <div>
             <footer className="footer-distributed">
 
 <div className="footer-left">
 
 <h3>BD<span>Tour</span></h3>
 
 <p className="footer-links">
 <a href="/#">Home</a>
 ·/
 <a href="/#">Blog</a>
 ·/
 <a href="/#">Pricing</a>
 ·/
 <a href="/#">About</a>
 ·
 <a href="#">Faq</a>
 ·
 <a href="#">Contact</a>
 </p>
 
 <p className="footer-company-name">BDtour &copy; 2021</p>
 </div>
 
 <div className="footer-center">
 
 <div className='flexing'>
 
 <p>{map}21 Revolution Street Delhi, India</p>
 </div>
 
 <div>
 
 <p>{telephone}+1 555 123456</p>
 </div>
 
 <div>
 
 <p>{envelope}<a href="mailto:support@company.com">contact@webdevtrick.com</a></p>
 </div>
 
 </div>
 
 <div className="footer-right">
 
 <p className="footer-company-about">
 <span>About the company</span>
 Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
 </p>
 
 <div className="footer-icons">
 
 <a href="/#">{facebook}</a>
 <a href="/#">{facebook}</a>
 <a href="/#">{facebook}</a>
 <a href="/#">{facebook}</a>
 
 </div>
 
 </div>
 
 </footer>
 
        </div>
    );
};

export default Footer;