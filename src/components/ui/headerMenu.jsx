import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const HeaderMenu = () => {

    const navigate = useNavigate();

    return (
         <div className="header__menu">
             <div className="header__categories">
                 <a href='#categories'>All Categories</a>
             </div>
             <ul className="header__list">
                 <li className='header__list--item'>
                     <p onClick={() => navigate('/')}>Home</p>
                 </li>
                 <li className='header__list--item'>
                     <p onClick={() => navigate('/games')}>Games</p>
                 </li>
             </ul>
         </div>
    );
}

export default HeaderMenu;
