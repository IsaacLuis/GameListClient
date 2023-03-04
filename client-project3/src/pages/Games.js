import { useEffect, createContext, useContext, useState } from "react";
import { LoadingContext } from "../context/loading.context"




const Games = ({}) => {

    const { getGames,setGames,games} = useContext(LoadingContext)

    

    useEffect(() => {
        getGames()
}, [])


return (
    <div>
      <h1>Games</h1>
      {games ? (
        games.map((game) => (
          <div key={game.id}>
            <p>{game.name}</p>
          </div>
        ))
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
}

export default Games