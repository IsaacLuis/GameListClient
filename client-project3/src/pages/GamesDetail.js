import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../context/loading.context";
import "./details.css";

const GameDetail = () => {
    const { id } = useParams();

    const {
        gameDetails,
        games,
        setGameDetails,
        gameDetailsScreen,
        noGame,
        getGameScreen,
    } = useContext(LoadingContext);

    const carouselRef = useRef(null);

    useEffect(() => {

      //  if (!gameDetails) {
            console.log("this is the id", id);
            noGame(id);
      //  }


        getGameScreen(id);
        console.log("this is the id 2", id);

    }, [id]);

    useEffect(() => {
        
    }, [gameDetailsScreen]);

    return (
        <>
            {gameDetails ? (
                <div className="game-detail-container">
                    <div className="game-detail-image">
                        <img src={gameDetails.background_image} alt={gameDetails.name} />
                    </div>
                    <div className="game-detail-info">
                        <h1>{gameDetails.name}</h1>

                        <p>
                            <strong>Release Date:</strong> {gameDetails.released}
                        </p>

                        <p>
                            <strong>Genres:</strong>{" "}
                            {gameDetails.genres.map((genre) => genre.name).join(", ")}
                        </p>
                        <p>
                            <strong>Platforms:</strong>{" "}
                            {gameDetails.platforms.map(
                                (platform) => platform.platform.name
                            ).join(", ")}
                        </p>
                        <p>
                            <strong>Metacritic Score:</strong> {gameDetails.metacritic}
                        </p>
                        {gameDetails.description_raw && (
                            <p>{gameDetails.description_raw}</p>
                        )}

                        {gameDetailsScreen && gameDetailsScreen.results && (
                            <div>
                                <h2>Screenshots:</h2>
                                <div className="game-detail-carousel" ref={carouselRef}>
                                    {gameDetailsScreen.results.map((screen) => (
                                        <img
                                            className="game-detail-screen"
                                            key={screen.id}
                                            src={screen.image}
                                            alt={screen.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <h4>Loading...</h4>
            )}
        </>
    );
};

export default GameDetail;