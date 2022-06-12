import React from 'react';
import axios from 'axios';
import './App.css'

import { useState } from 'react'

// Components
import Button from './components/buttons';

function App() {

  const [peopleList, setPeopleList] = useState([]);

  const handleGetterClick = () => {
    
    const promise = new Promise((resolvido, rejeitado) => {
      fetch('/api/people', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado);
    });

    promise.then(result => console.log(result));

    // console.log();

  }


  return (
    <div className="App">
        <div className='server-getter'>
          <Button onClick={handleGetterClick}>Getter</Button>
        </div>
    </div>
  )
}

export default App
