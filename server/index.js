const express = require('express');
const cors = require('cors');
const pessoas = require('./api/pessoas');
const usuarios = require('./api/usuarios');
const boletos = require('./api/boletos');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', usuarios.router);
app.use('/api/people', pessoas.router); 
app.use('/api/bills', boletos.router);



app.listen(3000, () => {
    console.log("Servidor ouvindo a porta 3000");
})
