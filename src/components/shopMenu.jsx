import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shopmenu = () => {

    const navigate = useNavigate();

    return (
        <nav className="navigation-shop">
            <div className='row'>
            <ul className="header__list">
                 <li className='header__list--item'>
                     <p onClick={() => navigate('/')}>Home</p>
                 </li>
             </ul>
            </div>
        </nav>
    );
}

export default Shopmenu;
