const express = require('express');
const pessoas = require('./api/pessoas');
const app = express();

app.use(express.json());


app.use('/api/pessoas', pessoas.router);

app.listen(3000, () => {
    console.log("Servidor ouvindo a porta 3000");
})
