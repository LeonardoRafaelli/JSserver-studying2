import React, { useEffect } from 'react';
import axios from 'axios';
import PeopleService from './services/PeopleService';

import { people } from './interfaces/people.interface';

import './App.css'

import { useState } from 'react'

// Components
import Button from './components/buttons';

function App() {

  const [peopleList, setPeopleList] = useState<people[]>([]);
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    getPeople();
  }, [])

  const getPeople = () => {
    PeopleService.get().then(result => { setPeopleList(result) }).catch(console.error);
  }

  const updatePerson = () => {
    const people = {
      id, cpf, name
    }
    PeopleService.update(people).then(result => { clearInputs(); getPeople() }).catch(console.error);
  }

  const createPerson = () => {
    const people = {
      cpf, name
    }
    PeopleService.create(people).then(result => { clearInputs(); getPeople() }).catch(console.error);
  }

  const clearInputs = () => {
    setName("");
    setCpf("");
    setId(0);
  }

  const initEdition = (person: people) => {
    setId(person.id);
    setName(person.name);
    setCpf(person.cpf);
  }

  const save = () => {
    if (id == 0) {
      createPerson()
    } else {
      updatePerson();
    }
  }


  return (
    <div className="App">
      <div className='server-getter'>
        {name && cpf ?
          <button onClick={() => save()}>
            {id === 0 ? "Create Person" : "Update Person"}
          </button> : null}

        <p>Create a new person here</p>
        <p>Name</p>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
        <p>CPF</p>
        <input type="text" value={cpf} onChange={(e) => { setCpf(e.target.value) }} />



        <div className='people-name'>
          {peopleList.map(person => {
            return <div>
              <p>ID: {person.id}</p>
              <p>NAME: {person.name}</p>
              <p>CPF: {person.cpf}</p>
              <Button onClick={() => initEdition(person)}>Editar</Button>
              <hr />
            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default App
