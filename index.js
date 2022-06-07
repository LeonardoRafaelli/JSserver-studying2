const express = require('express');
const pessoas = require('./api/pessoas');
const usuarios = require('./api/usuarios');
const boletos = require('./api/boletos');

const app = express();

app.use(express.json());

app.use('/api/usuarios', usuarios.router);
app.use('/api/pessoas', pessoas.router); 
app.use('/api/boletos', boletos.router);



app.listen(3000, () => {
    console.log("Servidor ouvindo a porta 3000");
})
