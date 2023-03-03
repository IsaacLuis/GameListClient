import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { get, post } from "../services/authService";
import axios from "axios";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');


    const setTimedMessage = (newMessage) => {
      setMessage(newMessage);
      setTimeout(() => {
        setMessage('')
      }, 4000)
    }




const fetchQuotes = async () => {
	try {
        console.log("Calling API");
		const res = await axios.get(
			`https://famous-quotes4.p.rapidapi.com/random`,
			{
				headers: {
					'x-rapidapi-host': 'https://rawg-video-games-database.p.rapidapi.com/games',
					'x-rapidapi-key': '43a14242dd124f1fb5e0bb64b4a70da0'
				},
				params: {category: 'all', count: '10'}
			}
		)
        .then(()=>{
               
                console.log('res',  res);
        })
	} catch (err) {
		console.log(err);
	}
};

    



    return (
        <LoadingContext.Provider value={{ isLoading, fetchQuotes,message, setUser, user, setIsLoading, setMessage, setTimedMessage,}}>
          {children}
        </LoadingContext.Provider>
      );
}

export { LoadingContext, LoadingProvider }