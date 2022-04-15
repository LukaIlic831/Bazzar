import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import img from '../assets/empty.svg';

const Wishitems = ({ wishgames, removewishgame }) => {

    const navigate = useNavigate();


    return (
        <div className='row'>
            <div className="wishlist__title">
                <h2>Wish List</h2>
            </div>
            <div className="wishItems__wrapper">
                { 
                 wishgames.length !==0 ?
                    wishgames && wishgames.map(item =>
                        <div className="wishitem" key={item.id}>
                            <div className="wishitem__img--name">
                                <figure className="wishitem__img--wrapper">
                                    <img src={item.img} className="wishitem__img" />
                                </figure>
                                <h5 className='wishitem__para'>{item.name}</h5>
                            </div>
                            <FontAwesomeIcon className="wishitem__trash" onClick={() => removewishgame(item.id)} icon="fa-solid fa-trash" />
                        </div>) :
                        <div className="no-items">
                            <figure className='no-item-img'>
                                <img src={img} alt="" />
                            </figure>
                            <div className="no-item-h2">
                            <h2>No Games in Wish List</h2>
                            </div>
                            <a className='product__para--button-buy wishitem__add-to-cart' onClick={() => navigate('/games')}>
                                    Find Games
                            </a>
                        </div>
                }
            </div>
        </div>
    );
}

export default Wishitems;
