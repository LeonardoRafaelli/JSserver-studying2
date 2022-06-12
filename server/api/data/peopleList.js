// PEOPLE LIST & FUNCTIONS

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

const getPerson = (id) => {
    return getPeople().find(p => p.id === id);
}

module.exports = {
    getPeople,
    getPerson
}