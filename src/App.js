import React, { useState, useEffect } from 'react';
import './App.css';

import Character from './components/Character';
import Details from './components/Details';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [currentCharacterUrl, setCurrentCharacterUrl] = useState('');

  const openDetails = url => {
    setCurrentCharacterUrl(url)
  }

  const closeDetails = () => {
    setCurrentCharacterUrl(null)
  }


  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        // console.log(res.data);
        setCharacters(res.data);
      }).catch(err => {console.error(err);})
  }, [])
  
  

  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      {
        characters.map(cha => {
          return <Character key={cha.url}
                            info={cha}
                            openDetails={openDetails}
                            closeDetails={closeDetails}
          />
        })
      }
      {/* {
        currentCharacterId && <Details characterId={currentCharacterId} close={closeDetails} />
      } */}
      {
        currentCharacterUrl && <Details characterUrl={currentCharacterUrl} close={closeDetails} />
      }
    </div>
  )
}

export default App;
