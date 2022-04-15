import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({ genres }) => {

    const navigate = useNavigate();

    function clickCategory(item){
        navigate(`/games`, {
            state: {
                genreGames:item
              }
        })
    }

    return (
        <div className='row'>
            <div id='categories' className="categories__title">
                <h2>CATEGORIES</h2>
            </div>
            <div className="categories__wrapper">
                {
                    genres && genres.results &&
                    genres.results.map(item =>
                        <div className="cat__block" key={item.id} onClick={() => clickCategory(item)}>
                            <figure className='catimg__wrap'>
                                <img className='catimg' src={item.image_background} alt="" />
                            </figure>
                            <p className='cat__block--para'>{item.name}</p>
                        </div>).splice(0, 12)
                }
            </div>
        </div>
    );
}

export default Categories;
