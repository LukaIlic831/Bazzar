import axios from 'axios';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import img from '../assets/sad.svg';

var nextPage = 1;
var year;
const Shopcategories = ({ games, genres }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [viewIconO, setViewIconO] = useState(true);
    const [viewIconT, setViewIconT] = useState(false);
    const [noResults, setnoResults] = useState(false);
    const [submitGames, setsubmitGames] = useState([]);
    var selectedgames = [];
    var checkedCategories = [];
    var checkedStars = [];
    var filters = document.querySelector(".shop__categories--wrapper")

    async function loadAllGames() {
        setnoResults(false);
        setLoading(true);
        var targetCategoryGames = location.state;
        var GamestoDisplay = [];
        if (GamestoDisplay.length == 0) {
            for (var i = 1; i <= 4; i++) {
                const { data } = await axios.get(`https://api.rawg.io/api/games?key=59609a52ddb8440ca460beb7b1ead084&page=${i}`)
                data.results.map((item) => targetCategoryGames && targetCategoryGames.genreGames && targetCategoryGames.genreGames.games.map(elem => elem.name == item.name && GamestoDisplay.push(item)))
            }
        }

        if (GamestoDisplay.length !== 0 && submitGames.length == 0) {
            setsubmitGames(GamestoDisplay);
            document.querySelector('.shop__items--buttons').style.display = "none";
        }
        else if (submitGames.length == 0 && nextPage >= 1) {
            setsubmitGames(games.results)
            nextPage = 1;
        }
        setLoading(false)
    }



    function getCategories(e) {
        let isChecked = e.target.checked;
        if (isChecked) {
            if (!checkedCategories.includes(e.target.value)) {
                checkedCategories.push(e.target.value)
            }
        }
        else {
            checkedCategories.pop();
        }
    }

    function getStars(e) {
        let isChecked = e.target.checked;
        if (isChecked) {
            if (!checkedStars.includes(e.target.value)) {
                checkedStars.push(e.target.value)
            }
        }
        else {
            checkedStars.pop();
        }
    }

    function getYear(e) {
        year = e.target.value;
        document.querySelector('.year').innerHTML = year;
    }

    async function fetchNextPage() {
        setLoading(true);
        nextPage++;
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=59609a52ddb8440ca460beb7b1ead084&page=${nextPage}`)
        setsubmitGames(data.results)
        document.querySelector('.shop__item--button1').style.display = "block";
        setLoading(false);
    }

    async function fetchPrevPage() {
        setLoading(true);
        nextPage--;
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=59609a52ddb8440ca460beb7b1ead084&page=${nextPage}`)
        setsubmitGames(data.results)
        nextPage == 1 && (document.querySelector('.shop__item--button1').style.display = "none")
        setLoading(false);

    }

    function checkPageNumber() {
        nextPage == 1 && (document.querySelector('.shop__item--button1').style.display = "none")
    }

    async function submitFilters() {

         var checkboxes = document.getElementsByClassName("genreCheckbox");
         for(var i=0; i<checkboxes.length; i++){
             if(checkboxes[i].checked){
                 checkboxes[i].checked = false;
             }
         }

            setnoResults(false);
            setLoading(true);
            const { data } = await axios.get(`https://api.rawg.io/api/games?key=59609a52ddb8440ca460beb7b1ead084&dates=${year}-01-01,${year}-12-31`)
            if (checkedCategories.length > 0 && checkedStars.length > 0) {
                data.results.map(item => item.genres.map(elem => {
                    if (checkedCategories.includes(elem.name) && checkedStars.includes(`${Math.ceil(item.rating)}`)) {
                        selectedgames.push(item);
                    }

                }))
                if(selectedgames.length == 0){
                    setnoResults(true)
                    document.querySelector('.shop__items--buttons').style.display = "none";
                }
                else{
                    setnoResults(false) 
                }
                document.querySelector('.shop__items--buttons').style.display = "none";
                setsubmitGames(selectedgames)
            }

            else if (checkedCategories.length > 0 && checkedStars.length == 0 && year) {
                data.results.map(item => item.genres.map(elem => {
                    if (checkedCategories.includes(elem.name)) {
                        selectedgames.push(item);
                    }

                }))
                if(selectedgames.length == 0){
                    setnoResults(true)
                    document.querySelector('.shop__items--buttons').style.display = "none";
                }
                else{
                    setnoResults(false) 
                }
                document.querySelector('.shop__items--buttons').style.display = "none";
                setsubmitGames(selectedgames)
            }

            else if (checkedCategories.length == 0 && checkedStars.length > 0 && year) {
                data.results.map(item => {
                    if (checkedStars.includes(`${Math.ceil(item.rating)}`)) {
                        selectedgames.push(item);
                    }

                })
                if(selectedgames.length == 0){
                    setnoResults(true)
                    document.querySelector('.shop__items--buttons').style.display = "none";
                }
                else{
                    setnoResults(false) 
                }
                document.querySelector('.shop__items--buttons').style.display = "none";
                setsubmitGames(selectedgames)
            }

            else if (year) {
                document.querySelector('.shop__items--buttons').style.display = "none";
                setsubmitGames(data.results)
            }

            else if (!year && checkedStars.length > 0) {
                var onlyStars = [];
                games.results.map(item => {
                    if (checkedStars.includes(`${Math.ceil(item.rating)}`)) {
                        onlyStars.push(item)
                    }

                }
                )
                if(onlyStars.length == 0){
                    setnoResults(true)
                    document.querySelector('.shop__items--buttons').style.display = "none";
                }
                else{
                    setnoResults(false) 
                }
                setsubmitGames(onlyStars);
                document.querySelector('.shop__items--buttons').style.display = "none";

            }

            else if (!year && checkedCategories.length > 0) {
                var onlyCategories = [];
                games.results.map(item => item.genres.map(elem => {
                    if (checkedCategories.includes(elem.name)) {
                        onlyCategories.push(item)
                    }
                })
                )
                if(onlyCategories.length == 0){
                    setnoResults(true)
                    document.querySelector('.shop__items--buttons').style.display = "none";
                }
                else{
                    setnoResults(false) 
                }
                setsubmitGames(onlyCategories);
                document.querySelector('.shop__items--buttons').style.display = "none";
            }
    


            setLoading(false);

    }

    async function cancelFilters() {
        var checkboxes = document.getElementsByClassName("genreCheckbox");
         for(var i=0; i<checkboxes.length; i++){
             if(checkboxes[i].checked){
                 checkboxes[i].checked = false;
             }
         }
        setnoResults(false);
        setLoading(true);
        setsubmitGames(games.results);
        nextPage = 1;
        document.querySelector('.shop__items--buttons').style.display = "flex";
        setLoading(false);
    }

    function changeSorting(e) {
        var changeValue = e.target.value;
        if (submitGames.length > 0) {
            if (changeValue == 'Rating-high-low') {
                setsubmitGames(submitGames.slice().sort((a, b) => b.rating - a.rating))
            }

            if (changeValue == 'Rating-low-high') {
                setsubmitGames(submitGames.slice().sort((a, b) => a.rating - b.rating))
            }

            if (changeValue == 'Year-low-high') {
                setsubmitGames(submitGames.slice().sort((a, b) => a.released.substr(0, 4) - b.released.substr(0, 4)))

            }

            if (changeValue == 'Year-high-low') {
                setsubmitGames(submitGames.slice().sort((a, b) => b.released.substr(0, 4) - a.released.substr(0, 4)))
            }
        }
    }

    function toggleFilter() {
        filters.classList.toggle("show-filters");
    }

    function viewIconOne(){
        document.querySelector(".view__icon2").style.backgroundColor = "white";
        document.querySelector(".view__icon2").style.color = "#7a3092";
        document.querySelector(".view__icon1").style.backgroundColor = "#7a3092";
        document.querySelector(".view__icon1").style.color = "white";
        setViewIconO(true);
        setViewIconT(false);
    }

    function viewIconTwo(){
        document.querySelector(".view__icon1").style.backgroundColor = "white";
        document.querySelector(".view__icon1").style.color = "#7a3092";
        document.querySelector(".view__icon2").style.backgroundColor = "#7a3092";
        document.querySelector(".view__icon2").style.color = "white";
        setViewIconO(false);
        setViewIconT(true);
    }


    useEffect(() => {
        loadAllGames();
    }, [games]);

    return (
        <div className='row'>
            <div className="shop__view--wrapper">
                <div className="shop__filter--button" onClick={toggleFilter}>
                    <p>Filter</p>
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right right" />
                    </div>
                </div>
                <div className="shop__categories--wrapper">
                    <div className="shop__categories--block">
                        <p className='shop__categories--title'>Categories</p>
                        <div className="shop__categories__para">
                            {
                                genres && genres.results &&
                                genres.results.map((item) =>
                                    <div className="shop__category" key={item.id}>
                                        <input className='genreCheckbox' type="checkbox" value={item.name} onChange={e => getCategories(e)} />
                                        <div className="shop__category--name"> {item.name} </div>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className="shop__categories--block">
                        <p className='shop__categories--title'>Stars</p>
                        <div className="shop__categories__para">
                            <div className="shop__category">
                                <input className='genreCheckbox' type="checkbox" value='1' onChange={e => getStars(e)} />
                                <div className="shop__category--name">
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                </div>
                            </div>
                            <div className="shop__category">
                                <input className='genreCheckbox' type="checkbox" value='2' onChange={e => getStars(e)} />
                                <div className="shop__category--name">
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                </div>
                            </div>
                            <div className="shop__category">
                                <input className='genreCheckbox' type="checkbox" value='3' onChange={e => getStars(e)} />
                                <div className="shop__category--name">
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                </div>
                            </div>
                            <div className="shop__category">
                                <input className='genreCheckbox' type="checkbox" value='4' onChange={e => getStars(e)} />
                                <div className="shop__category--name">
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                </div>
                            </div>
                            <div className="shop__category">
                                <input className='genreCheckbox' type="checkbox" value='5' onChange={e => getStars(e)} />
                                <div className="shop__category--name">
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                    <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop__categories--block">
                        <p className='shop__categories--title'>Year</p>
                        <div className="shop__categories--slider">
                            <input type="range" min="2000" max="2022" className='slider' onChange={e => getYear(e)}
                            />
                        </div>
                        <div className="shop__categories--price">
                            <span className='year'>Choose Year</span>
                        </div>
                    </div>
                    <div className="shop__categories--block">
                        <div className="shop__categories--btn-submit">
                            <a href="#games" className='wishitem__add-to-cart submit' onClick={submitFilters}>
                                Submit
                            </a>
                            <a href="#games" className='wishitem__add-to-cart cancel' onClick={cancelFilters}>
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
                <div id='games' className="shop__products--items-wrapper">
                    <div className="shop__products--header">
                        <div className="shop__price--select">
                            <select onChange={e => changeSorting(e)}>
                                <option defaultValue>Default sorting</option>
                                <option value="Rating-high-low">Rating high-low</option>
                                <option value="Rating-low-high">Rating low-high</option>
                                <option value="Year-high-low">Year high-low</option>
                                <option value="Year-low-high">Year low-high</option>
                            </select>
                        </div>
                        <div>
                            <a className='view__icon1' onClick={viewIconOne}>
                                <FontAwesomeIcon className='icon1' icon="fa-solid fa-table-cells-large" />
                            </a>
                            <a className='view__icon2' onClick={viewIconTwo}>
                                <FontAwesomeIcon className='icon2' icon="fa-solid fa-list" />
                            </a>
                        </div>
                    </div>
                        {
                            viewIconO ?
                            <div className='shop__items--wrapper' onLoad={checkPageNumber}>
                             {noResults ?
                            <div className="no__result--block">
                                <figure className='no__result--img-wrapper'>
                                    <img src={img} alt="" className="no__result--img" />
                                </figure>
                                <h2>Nothing was found</h2>
                            </div>
                            : (loading ?
                                <div className="loading__background">
                                    <div className="loading">
                                    </div>
                                </div>
                                :
                                (submitGames && submitGames.length > 0 && submitGames.map(item =>
                                    <div className="shop__item" key={item.id} onClick={() => navigate(`/games/${item.id}`, {
                                        state: {
                                            games: submitGames
                                        }
                                    })}>
                                        <figure className='shop__item--img'>
                                            <img src={item.background_image} alt="" className="item__img" />
                                        </figure>

                                        <div className="shop__item--para">
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
                                    </div>)))
                        }
                          </div>
                            :
                            <div className='second__wrapper'>
                                 {noResults ?
                            <div className="no__result--block">
                                <figure className='no__result--img-wrapper'>
                                    <img src={img} alt="" className="no__result--img" />
                                </figure>
                                <h2>Nothing was found</h2>
                            </div>
                            : (loading ?
                                <div className="loading__background">
                                    <div className="loading">
                                    </div>
                                </div>
                                :
                                (submitGames && submitGames.length > 0 && submitGames.map(item =>
                                    <div className="second__item" key={item.id} onClick={() => navigate(`/games/${item.id}`, {
                                        state: {
                                            games: submitGames
                                        }
                                    })}>
                                        <figure className='second__item--img-wrapper'>
                                            <img src={item.background_image} alt="" className="second__item--img" />
                                        </figure>

                                        <div className="second__item--para">
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
                                                        <FontAwesomeIcon className='star second-star' key={index} icon="fa-solid fa-star" />)
                                                        :
                                                        <p className='notRated'>Not rated yet</p>
                                                }
                                                <span className='reviews'>({item.reviews_count})</span>
                                            </div>
                                        </div>
                                    </div>)))
                        }
                            </div>
                        
                        }
                    <div className="shop__items--buttons">

                        <a href='#navigation' className='shop__item--button1 product__para--button-wishlist' onClick={fetchPrevPage}>
                            Prev
                        </a>
                        <a href='#navigation' className='shop__item--button wishitem__add-to-cart' onClick={fetchNextPage}>
                            Next
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shopcategories;
