const express = require('express');
const people = require('./pessoas');
const users = require('./usuarios');
const router = express.Router();


// ID_Boleto
// Valor
// ID_User
// ID_Pessoa
// Status
// Nome_Pessoa

const billList = [
    {
        id: 1,
        price: 500,
        user_id: 1,
        person_id: 1,
        person_name: "Leo",
        status: "Pending",
    },
    {
        id: 2,
        price: 1000,
        user_id: 2,
        person_id: 2,
        person_name: "Rafaelli",
        status: "OK",
    }
]

const getBills = () => {
    return billList;
}

const getPersonBill = (id) => {
    const bill = getBills().filter(b => b.person_id == id);
    return bill;
}

const createBill = (bill) => {
    bill.id = getBills().length + 1;
    bill.person_name = people.getPerson(bill.person_id).name;
    getBills().push(bill);
    return bill
}

const updateBillStatus = (id, status) => {
    const bill = getBills().find(b => b.id == id);
    bill.status = status;
    return bill;
}

// ROUTES

router.post('/', (req, res) => {
    const bill = req.body;
    if(bill.price > 0){
        if(bill.status){
            bill.person_id && bill.user_id ? res.json(createBill(bill)) :
            res.status(400).send("It's not possible to create a bill without an user and a person");
        } else {
            res.status(400).send("The bill must have a status")
        }
    } else {
        res.status(400).send("The bill has to have the price above 0");
    }
})

router.get('/', (req, res) => {
    const billList = getBills();
    res.json(billList);
})

router.get('/person/:id', (req, res) => {
    const id = req.params.id;
    res.json(getPersonBill(id));
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json(updateBillStatus(id, req.body.status));
})


module.exports = {
    router,
    getBills
}