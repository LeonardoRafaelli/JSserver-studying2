const express = require('express');
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
    }
]

const fetchBills = () => {
    return billList;
}

router.get('/', (req, res) => {
    const billList = fetchBills();
    res.json(billList);
})


module.exports = {
    router
}