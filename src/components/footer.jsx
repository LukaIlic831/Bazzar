import React from 'react';
import logo from '../assets/gameSFooter.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className="row">
                <div className="footer__wrapper">
                    <div className="footer__block">
                        <figure className='footer__logo--wrap'>
                            <img src={logo} alt="" />
                        </figure>
                        <div className="footer__block--para">
                            Lorem ipsum, or lipsum as it is sometimes kno wn,
                            is dummy text used in laying out print, gra phic
                            or web designs the passage.
                        </div>
                    </div>
                    <div className="footer__block">
                        <p className='footer__block--title'>INFORMATION</p>
                        <ul className='footer__block--list'>
                            <li>Return Policy</li>
                            <li>Terms &amp; condition</li>
                            <li>Privacy Policy</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="footer__block">
                        <p className='footer__block--title'>CONTACT</p>
                        <div className="footer__location">
                        <FontAwesomeIcon icon="fa-solid fa-location-pin" />
                            <p>Agostina Neta 14, Belgrade Serbia</p>
                        </div>
                        <div className="footer__phone">
                        <FontAwesomeIcon icon="fa-solid fa-phone" />
                            <p>+566 477 256,+566 254 575</p>
                        </div>
                        <div className="footer__mail">
                        <FontAwesomeIcon icon="fa-solid fa-envelope" />
                            <p>info@bazzar.com</p>
                        </div>
                        <div className="footer__social">
                        <FontAwesomeIcon className='facebook' icon="fa-brands fa-facebook" />
                        <FontAwesomeIcon className='twitter' icon="fa-brands fa-twitter" />
                        <FontAwesomeIcon className='instagram' icon="fa-brands fa-instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className="row">
            <div className="copyright__wrapper">
                <div className="copyright">
                    <p>&copy; Bazzar - All Rights Reserved</p>
                </div>
            </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
