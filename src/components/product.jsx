import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ id, addwishgame, wishgames }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [game, setGame] = useState([]);
    const [gameImages, setGameImages] = useState([]);
    const [latestGames, setLatestGames] = useState([]);
    const year = new Date().getFullYear();
    const month = ('0' + (new Date().getMonth() + 1)).slice(-2);
    var targetGame = [];

    async function getLatestGames() {
        const { data } = await axios.get(`https://api.rawg.io/api/games?dates=${year}-${month}-01,${year}-${month}-30&ordering=-added&key=59609a52ddb8440ca460beb7b1ead084`);
        setLatestGames(data);
    }

    function replace(item, latestgames){
        replaceGame(item);
        navigate(`/games/${item.id}`, {
            state: {
                games: latestgames
            }
        })
    }

    function replaceGame(item) {
        while (targetGame.length > 0) {
            targetGame.pop()
        }

        targetGame.push(item)
        setGame(targetGame)
        setGameImages(_ => ({
            background_image: game.map(item => item.background_image),
            images: {
                image:
                    targetGame
            }
        })
        )
    }

    async function loadGames() {
        location.state.games.map(item => item.id == id && targetGame.push(item));
        setGame(targetGame)
        setGameImages(_ => ({
            background_image: game.map(item => item.background_image),
            images: {
                image:
                    targetGame
            }
        })
        )
    }

    function changeImage(e) {
        var image = e.target.src;
        gameImages.images.image.map(item => item.short_screenshots.map(elem => elem.image == image && (document.querySelector(".product__img").src = `${image}`)))
    }

    function addGame() {
        game.map(item => addwishgame(item.name, item.id, item.background_image))
    }

    function checkWishGame(name) {
        return wishgames.find(item => item.id == id)
    }

    useEffect(() => {
        loadGames();
        getLatestGames();
    }, []);

    return (
        <div className='row'>
            <div className="product__wrapper">
                {game && game.map(item =>
                    <div className='p_wrapp' key={item.id}>
                        <div className="product__img--wrapper" >
                            <img src={item.background_image} alt="" className="product__img" />
                            <div className="product__img--screenshots">
                                {item.short_screenshots.slice(0, 4).map((elem, index) =>
                                    <img src={elem.image} key={index} alt="" className="product__img--screen" onClick={(e) => changeImage(e)} />
                                )}
                            </div>
                        </div>
                        <div className="product__para">
                            <h2 className='product__para--title'>{item.name}</h2>
                            <div className="product__para--ratings">
                                {
                                    item.rating > 0 ? new Array(Math.ceil(item.rating)).fill(0).map((_, index) =>
                                        <FontAwesomeIcon className='star' key={index} icon="fa-solid fa-star" />)
                                        :
                                        <p className='notRated'>Not rated yet</p>
                                }
                            </div>
                            <div className="product__para--category">
                                <span>Genres: </span>
                                {item.genres.map((elem) =>
                                    <p key={elem.id}>{elem.name}</p>
                                )}
                            </div>
                            <div className="product__para--platforms">
                                <span>Platforms: </span>
                                {item.parent_platforms.map((elem, index) =>
                                    <p key={index}>{elem.platform.name}</p>)}
                            </div>
                            <div className="product__para--sku">
                                <span>Id: </span>
                                <p>{item.id}</p>
                            </div>
                            <div className="product__para--price">
                                <span className="product__para--sale-price">Reviews:</span>
                                <span className="product__para--original-price">{item.reviews_count}</span>
                            </div>
                            <div className="product__para--desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis
                            </div>
                            <div className="product__para--buttons">
                                {checkWishGame(item.name) ?
                                    <a className='product__para--button-buy wishitem__add-to-cart added wish-btn'>
                                        <FontAwesomeIcon className='product__btn--heart' icon="fa-solid fa-heart" />
                                        Added to Wishlist</a>
                                    :
                                    <a className='product__para--button-buy wishitem__add-to-cart wish-btn' onClick={addGame}>
                                        <FontAwesomeIcon className='product__btn--heart' icon="fa-solid fa-heart" />
                                        Wishlist
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="relatedProducts__header">
                <h2>Latest Games</h2>
            </div>
            <div className="relatedProducts__wrapper">
                {
                    latestGames && latestGames.results && latestGames.results.slice(0, 4).map(item =>
                        <div className="relatedProduct"  key={item.id} onClick={() => replace(item, latestGames.results)}>
                            <figure className='relatedProduct__img--wrapper'>
                                <img className='relatedProduct__img' src={item.background_image} alt="" />
                            </figure>
                            <p className='relatedProduct__title'>
                                {item.name}
                            </p>
                            <div className="relatedProduct--price">
                                <span className="relatedProduct--sale-price">Released: </span>
                                <span className="relatedProduct--original-price">{item.released}</span>
                            </div>
                            <div className="relatedProduct__rating">
                                {
                                    item.rating > 0 ? new Array(Math.ceil(item.rating)).fill(0).map((_, index) =>
                                        <FontAwesomeIcon className='star' key={index} icon="fa-solid fa-star" />)
                                        :
                                        <p className='notRated'>Not rated yet</p>
                                }
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
}

export default Product;
