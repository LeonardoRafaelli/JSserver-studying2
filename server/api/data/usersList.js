// USERS LIST & FUNCTIONS

const usersList = [
    {
        id: 1,
        name: "Leonardo",
        passwd: "12345678",
    },
    {
        id: 2,
        name: "Rafaelli",
        passwd: "87654321",
    },
];

const getUsersList = () => {
    return usersList;
};

const getUser = (id) => {
    return getUsersList().find(u => u.id === id);
}


module.exports = {
    getUsersList,
    getUser
}