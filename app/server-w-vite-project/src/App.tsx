import React from 'react';
import axios from 'axios';
import './App.css'

import { useState } from 'react'

// Components
import Button from './components/buttons';





function App() {

  const [peopleList, setPeopleList] = useState<{id?: BigInteger, name?: String, cpf?: String}[]>([{}]);
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");

  const getPeople = async () => {
    await fetch('http://localhost:3000/api/people')
    .then(res => res.json())
    .then(res => setPeopleList(res));
  }

  const createPerson = ({name, cpf} : {name: String, cpf: String}) => {
    fetch('http://localhost:3000/api/people',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      cpf: cpf
    })
  })
    .then(res => res.json())
    .then(res => console.log(res));
  }


  return (
    <div className="App">
        <div className='server-getter'>
          <Button onClick={getPeople}>Get People</Button>
          {name && cpf ? <button onClick={() => createPerson({name, cpf})}>Create Person</button> : null}

          <p>Create a new person here</p>
          <p>Name</p>
          <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
          <p>CPF</p>	
          <input type="text" value={cpf} onChange={(e) => {setCpf(e.target.value)}}/>



          <div className='people-name'>
            {peopleList.map(p => {
              return <div>
                  <p>ID: {p.id}</p>
                  <p>NAME: {p.name}</p>
                  <p>CPF: {p.cpf}</p>
                  <hr />
                </div>
            })} 
          </div>

        </div>
    </div>
  )
}

export default App
