// BILL LIST & FUNCTIONS


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

module.exports = {
    getBills,
    getPersonBill
}