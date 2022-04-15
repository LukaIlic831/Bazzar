import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Shop from "./pages/shop";
import Wishlist from "./pages/wishList";
import Item from "./pages/item";
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [genres, setGenres] = useState([]);
  const [games, setGames] = useState([]);
  const [latestGames, setLatestGames] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  const [topRatedGames, setTopRatedGames] = useState([]);
  const date = new Date();
  const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2);
  const currentYear = date.getFullYear();
  const [wishGames, setWishGames] = useState([]);

  function addWishGame(gamename, gameid, gameimg) {

    setWishGames([...wishGames, {
      name: gamename,
      img: gameimg,
      id: gameid
    }])
  }

  function removeWishGame(gameId){
    setWishGames(wishGames.filter(item => item.id !== gameId))
  }


  async function fetchDataGenres() {
    const { data } = await axios.get('https://api.rawg.io/api/genres?key=59609a52ddb8440ca460beb7b1ead084')
    setGenres(data);
  }

  async function fetchDataGames() {
    const { data } = await axios.get(`https://api.rawg.io/api/games?key=59609a52ddb8440ca460beb7b1ead084`)
    setGames(data)

  }

  async function fetchLatestGames() {
    const { data } = await axios.get(`https://api.rawg.io/api/games?dates=${currentYear}-${currentMonth}-01,${currentYear}-${currentMonth}-30&ordering=-added&key=59609a52ddb8440ca460beb7b1ead084`)
    setLatestGames(data);
  }

  async function fetchPopularGames() {
    const { data } = await axios.get(`https://api.rawg.io/api/games?dates=${currentYear}-01-01,${currentYear}-12-31&key=59609a52ddb8440ca460beb7b1ead084`)
    setPopularGames(data);
  }

  async function fetchTopRatedGames() {
    const { data } = await axios.get(`https://api.rawg.io/api/games?dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-rating&key=59609a52ddb8440ca460beb7b1ead084`)
    setTopRatedGames(data);
  }



  useEffect(() => {
    fetchDataGames();
    fetchDataGenres();
    fetchLatestGames();
    fetchPopularGames();
    fetchTopRatedGames();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home genres={genres} latestgames={latestGames} populargames={popularGames} topratedgames={topRatedGames} />}></Route>
          <Route exact path="/games" element={<Shop games={games} genres={genres} setgames={setGames} />}></Route>
          <Route path="/wishlist" element={<Wishlist wishgames={wishGames} removewishgame={removeWishGame}/>}></Route>
          <Route path="/games/:id" element={<Item addwishgame={addWishGame} wishgames={wishGames} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
