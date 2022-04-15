import React from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';
import Shopcategories from '../components/shopCategories';
import Shopmenu from '../components/shopMenu';

const Shop = ({games, genres, setgames}) => {
    return (
        <div>
            <Nav/>
            <Shopmenu/>
            <Shopcategories games={games} genres={genres} setgames={setgames}/>
            <Footer/>
        </div>
    );
}

export default Shop;
