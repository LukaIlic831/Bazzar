import React from 'react';
import Header from "../components/header";
import Threeblocks from "../components/ui/threeblocks";
import Categories from "../components/categories";
import Adds from "../components/adds";
import Bestselling from "../components/bestselling";
import Footer from "../components/footer";
import Nav from "../components/nav";

const Home = ({genres, latestgames, populargames, topratedgames}) => {
    return (
        <div>
            <Nav />
            <Header genres={genres}/>
            <Threeblocks />
            <Categories genres={genres} />
            <Adds />
            <Bestselling Lgames={latestgames} Pgames={populargames} Tgames={topratedgames}/>
            <Footer />
        </div>
    );
}

export default Home;
