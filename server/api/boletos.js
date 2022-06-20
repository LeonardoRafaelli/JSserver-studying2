const express = require('express');
const router = express.Router();

// Imports
const references = require('./references');

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
        person_name: "Gustavinho",
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

const checkUser= (id) => {
    const user = references.users.getUser(id);
    return user;
}

const checkPerson = (id) => {
    const person = references.people.getPerson(id);
    return person;
}

const createBill = (bill) => {
    bill.id = getBills().length + 1;

    bill.person_name = references.people.getPerson(bill.person_id).name;
    getBills().push(bill);
    
    return bill
}

const resolveBill = (id, res) => {
    const billToResolve = getBills().find(b => b.id === id);
    billToResolve.status = "OK";
    res.json(billToResolve);
}


const newBill = (bill, res) => {

    if(!checkUser(bill.user_id)){
        res.status(400).send("User not found.")
    } else 
    if(!checkPerson(bill.person_id)){
        res.status(400).send("Person not found.")
    } else {
        if(bill.price > 0){
            if(bill.status){
                res.json(createBill(bill))
            } else {
                res.status(400).send("Status not found.")
            }
        } else {
            res.status(400).send("The bill must have a price")
        }
    }
    
}

// ROUTES

router.post('/', (req, res) => {
    const bill = req.body;
    newBill(bill, res);
})

router.get('/', (req, res) => {
    const billList = getBills();
    res.json(billList);
})

router.get('/person/:id', (req, res) => {
    const id = req.params.id;
    res.json(getBills().filter(b => b.person_id == id));
})


router.put('/:id/resolve', (req, res) => {
    const id = req.params.id;
    resolveBill(id, res);
});




module.exports = {
    router,
    getBills
}