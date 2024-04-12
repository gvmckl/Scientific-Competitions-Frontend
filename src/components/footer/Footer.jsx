import React from 'react';
import Emoji from 'react-emoji-render'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='contacts'>
                <div className="footer-section">
                    <div id="footer-content">
                        <div id="footer-contacts">
                            <h2>+STEM nas Escolas</h2>
                            <div id="footer-social-media">
                                <a href="https://www.instagram.com/gvmckl/" className="footer-link" id="instagram" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="https://www.linkedin.com/in/geovanna-mickaella-076338262/" className="footer-link" id="linkedin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://github.com/gvmckl" className="footer-link" id="github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                        <ul class="footer-list">
                        <li><h2>Landing Page</h2></li>
                        <li><a href="#home" class="footer-link">Home</a></li>
                        <li><a href="#about" class="footer-link">Sobre</a></li>
                        <li><a href="#competitions" class="footer-link">Competições</a></li>
                        <li><a href="#contacts" class="footer-link">Contatos</a></li>
                    </ul>
                        <ul class="footer-list">
                        <a href=".\Home.jsx" target="_self"><img src="src\assets\logo1.svg" alt="logo"></img></a>
                        </ul>
                    </div>
                    <div id="footer-copyright">
                    &copy; All coprights reserved to gvmckl <Emoji text="❤️"/>
                    </div>
                </div>
            </footer>
       
    );
}

export default Footer;
