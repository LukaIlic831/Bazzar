import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toprated = ({games}) => {
    return (
        <div className="bestSelling__block">
            <div className="bestSelling__header">
                <p>TOP RATED</p>
            </div>
            <div className="bestSelling__items">
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
                                            new Array(Math.ceil(item.rating)).fill(0).map((_, index) =>
                                                <FontAwesomeIcon className='star' key={index} icon="fa-solid fa-star" />)
                                        }
                                        <span className='reviews'>({item.reviews_count})</span>
                                    </div>
                                </div>
                            </div>
                        ).splice(0, 3)
                    }
                </div>
            </div>
        </div>
    );
}

export default Toprated;
