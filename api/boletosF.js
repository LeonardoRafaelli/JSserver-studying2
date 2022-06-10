const bills = require('./boletos');

const getBills = () => {
    return bills.getBills();
}

const getPersonBill = (id) => {
    const bill = bills.getBills().find(b => b.person_id == id);
    return bill;
}

module.exports = {
    getBills,
    getPersonBill
}