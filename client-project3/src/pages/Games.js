import { useEffect, createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../context/loading.context"
import GameDetail from "./GamesDetail";



const Games = () => {

  const { getGames, setGames,getParams,page,page_size,setPage, games, gamesParams,setGamesParams } = useContext(LoadingContext)


  useEffect(() => {

    getGames()
  }, [page])


  const NextPage = (next) => {
    
    
      setPage(page + 1);
    
  }

 
  
  return (

    <div className="parentImg">

      <br />
      {games ? (
        games.map((game) => (
          <div className="game-card-container" key={game.id}>
                       
              <div className="game-card">
              <Link to={`/games/${game.id}`} > 
              <img src={game.background_image} alt="Gameimg" />
              </Link> 
              <h2>{game.name}</h2>
              <ul>
                <li><strong>Genre </strong> {game.genres[0].name}</li>
                <li><strong>Rating </strong>{game.rating}</li>
                <li><strong>ESRB Rating </strong>{game.esrb_rating.name}</li>
                <li><strong>Playtime </strong>{game.playtime} hrs</li>
                <li><strong>Released: </strong>{game.released}</li>
              </ul>
           
            </div>
            
          </div>



        ))

      )


        : (
          <h4>Loading...</h4>
        )}

      {games && games.length > 0 && (
       <footer>  <button onClick={NextPage}>Next Page</button>  </footer> 
                
      )}







    </div>





  );
}





export default Games