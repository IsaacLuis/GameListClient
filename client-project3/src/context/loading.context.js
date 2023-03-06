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
    const [ games, setGames ] = useState();
    const [ gamesParams, setGamesParams ] = useState(1);
    const [page, setPage] = useState(1); // current page number
    const [page_size, setPageSize] = useState(20); // number of games per page

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
				params: {page:page,page_size:page_size}
			}
		)
        .then((response)=>{
               setGames(response.data.results)

               setGamesParams(response.data.next) 
               console.log('page',  page);
                console.log('res',  response.data);
             console.log('this is the response', response)
                  
                
        })
        .catch((err) => {
          console.log(err)
        })


};

}



// const getParams = async () => {
  
  
//    function handleClick () {
//     setGamesParams('next');
//   }

  
    



// }




// {condition && <ConditionalComponent />}
//{fetchQuotes && <Games data={{fetchQuotes}} />}
    return (
      <div>
        <LoadingContext.Provider value={{ isLoading,page,page_size,setPage, gamesParams,setGamesParams, games,getGames, message, setUser, user, setIsLoading, setMessage, setTimedMessage}} >
          {children}
          
        </LoadingContext.Provider>

        

       </div>
      );
}

export { LoadingContext, LoadingProvider }