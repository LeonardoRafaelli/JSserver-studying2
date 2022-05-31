const express = require('express');
const router = express.Router();


// 100 - status de processamento;
// 200 - status OK;
// 300 - status de rota removida ou remanejada;
// 400 - status de erro;
// 500 - erros de servidor.

const listaPessoas = [
    {
        id: 1,
        nome: "Leo",
        cpf: "12345678"
    },
    {
        id: 2,
        nome: "GustaXL",
        cpf: "87654321"
    },
];

const buscarPessoas = () => {
    return listaPessoas;
}

const buscarPessoa = (id) => {
    const pessoa = buscarPessoas().find(p => p.id = id);
    return pessoa;
}

const criarPessoa = (pessoa) => {
    pessoa.id = buscarPessoas().length + 1;
    buscarPessoas().push(pessoa);
    return pessoa;
}

const deletarPessoa = (id) => {
    const index = buscarPessoas().findIndex(p => p.id === id);
    buscarPessoas().splice(index, 1);
    return buscarPessoas();
}


router.post('/', (req, res) => {
    const pessoaAdicionada = criarPessoa(req.body);
    res.json(pessoaAdicionada);
})


router.get('/', (req, res) => {
    res.send(buscarPessoas())
});


router.get('/:id', (req, res) => {
    const pessoa = buscarPessoa(req.params.id);
    res.json(pessoa);
})

router.delete('/:id', (req, res) => {
    const listaNova = deletarPessoa(req.params.id);
    res.json(listaNova);
})

router.put('/:id')



module.exports = {
    router,
    buscarPessoas
}