const express = require('express');
const router = express.Router();
const helper = require('../utils/helper');
const references = require('./references');

//Imports
// const {getPeople, getPerson} = require("./data/peopleList");

// 100 - status de processamento;
// 200 - status OK;
// 300 - status de rota removida ou remanejada;
// 400 - status de erro;
// 500 - erros de servidor.

const peopleList = [
    {
        name: "Leo",
        cpf: "12345678",
        id: 1,
    },
    {
        name: "Gustavinho",
        cpf: "87654321",
        id: 2,
    },
];

const getPeople = () => {
    return peopleList;
}

const getPerson = (_id) => {
    const id = helper.isInteger(_id) ? parseInt(_id) : _id;
    return getPeople().find(p => {
        return p.id === id
    });
}


const createPerson = (pessoa) => {
    pessoa.id = getPeople().length + 1;
    getPeople().push(pessoa);
    return pessoa;
}


const deletePerson = (id) => {
    const index = getPeople().findIndex(p => p.id === id);
    getPeople().splice(index, 1);

    return getPeople();
}

const checkBoleto = (id) => {
    const boletoExists = references.bills.getBills().find(b => b.person_id == id);
    return boletoExists ? false : true;
}

// ROUTES

router.post('/', (req, res) => {
    const pessoa = req.body;
    pessoa.name && pessoa.cpf ? res.json(createPerson(pessoa)) : res.status(400).json({ error: "Pessoa não possui nome E/OU cpf" });
})


router.get('/', (req, res) => {
    res.send(getPeople())
});


router.get('/:id', (req, res) => {
    const person = getPerson(req.params.id);
    res.json(person);
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    checkBoleto(id) ? res.json(deletePerson(id)) : res.status(400).json({ error: "The person you tried to delete is related with a bill" });
})

router.put('/:id', (req, res) => {
    const person = getPerson(req.params.id);

    person.name = req.body.name;
    person.cpf = req.body.cpf;
    res.json(person);
})


module.exports = {
    router,
    getPeople,
    getPerson
}