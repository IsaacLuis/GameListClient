import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { get, post } from "../services/authService";
import axios from "axios";
import Games from "../pages/Games";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [ games, setGames ] = useState(null);

    const setTimedMessage = (newMessage) => {
      setMessage(newMessage);
      setTimeout(() => {
        setMessage('')
      }, 4000)
    }

// 43a14242dd124f1fb5e0bb64b4a70da0
// games?key=<key from RAWG>
const getGames = async () => {
  
  if (!games) {

  
	
    console.log("Calling API"); 
		await axios.get(
			`https://rawg-video-games-database.p.rapidapi.com/games?key=43a14242dd124f1fb5e0bb64b4a70da0`,
			{
				headers: {
          'X-RapidAPI-Key': '3ab9eedeeemsh37ec609bf36b9b6p1b04b2jsnc001e82699f7',
          'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
				},
				params: {page_size: '5'}
			}
		)
        .then((response)=>{
               setGames(response.data.results)
                console.log('res',  response.data.results);
        })
        .catch((err) => {
          console.log(err)
        })


};

}



// {condition && <ConditionalComponent />}
//{fetchQuotes && <Games data={{fetchQuotes}} />}
    return (
      <div>
        <LoadingContext.Provider value={{ isLoading, setGames, games,getGames, message, setUser, user, setIsLoading, setMessage, setTimedMessage}} >
          {children}
          
        </LoadingContext.Provider>

        

       </div>
      );
}

export { LoadingContext, LoadingProvider }