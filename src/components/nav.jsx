import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo from '../assets/gameS.svg';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    return (
        <nav className='navigation' id='navigation'>
            <figure className="nav__logo" onClick={() => navigate('/')}>
                <img src={logo} alt="" className="logo" />
            </figure>
            <ul className="nav__links">
                <li className="nav__link">
                    <a onClick={() => navigate('/wishlist')}>
                    <FontAwesomeIcon className='icn' icon="fa-solid fa-heart" />
                    <p>Wish List</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
