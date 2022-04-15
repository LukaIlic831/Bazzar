import React from 'react';
import Nav from '../components/nav';
import Shopmenu from '../components/shopMenu';
import Footer from '../components/footer';
import Product from '../components/product';
import { useParams} from 'react-router-dom';

const Item = ({addwishgame, wishgames}) => {
    const { id } = useParams();
    return (
        <div>
        <Nav/>
        <Shopmenu/>
        <Product id={id} addwishgame={addwishgame} wishgames={wishgames}/>
        <Footer/>
        </div>
    );
}

export default Item;
