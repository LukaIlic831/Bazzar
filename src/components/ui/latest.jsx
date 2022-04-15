import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Latest = ({ games }) => {

    return (
        <div className="bestSelling__block">
            <div className="bestSelling__header">
                <p>LATEST</p>
            </div>
            <div className="bestSelling__items">
                {games && games.results &&
                    games.results.map(item =>
                        <div className="bestSelling__item" key={item.id}>
                            <figure className='item__img--wrap'>
                                <img src={item.background_image} alt="" />
                            </figure>
                            <div className="bestSelling__item--info">
                                <div className="bestSelling__item--para">
                                    <p>{item.name}</p>
                                    <div className="bestSelling__item--price">
                                        <span className='released'>Released:</span>
                                        <span className='release__date'>{item.released}</span>
                                    </div>
                                </div>
                                <div className="bestSelling__item--rating">
                                {
                                                    item.rating > 0 ? new Array(Math.ceil(item.rating)).fill(0).map((_, index) =>
                                                        <FontAwesomeIcon className='star' key={index} icon="fa-solid fa-star" />)
                                                        :
                                                        <p className='notRated'>Not rated yet</p>
                                                }
                                    <span className='reviews'>({item.reviews_count})</span>
                                </div>
                            </div>
                        </div>
                    ).splice(0, 3)
                }
            </div>
        </div>
    );
}

export default Latest;
