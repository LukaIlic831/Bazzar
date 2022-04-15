import React from 'react';
import Footer from '../components/footer';
import Shopmenu from '../components/shopMenu';
import Nav from '../components/nav';
import Wishitems from '../components/wishItems';

const Wishlist = ({wishgames, removewishgame}) => {
    return (
        <div>
            <Nav/>
            <Shopmenu/>
            <Wishitems wishgames={wishgames} removewishgame={removewishgame}/>
            <Footer/>
        </div>
    );
}

export default Wishlist;
