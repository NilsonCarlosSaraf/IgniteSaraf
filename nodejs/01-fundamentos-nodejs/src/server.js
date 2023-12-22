//const http = require('http') padrao de importacao CommonJS => utiliza o require(padrao mais antigo e pouco utilizado)
import http from 'node:http' //importacao atraves de ESMODULES


// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informacao unica/especifica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// Cabecalhos (Requisicao/resposta) => Metadados / da informacoes de como o dado pode/deve ser interpretado pelo front end

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
        })

        return res.end('Criacao de usuario')
    }

    return res.end('Hello Worldfsdfsds')
})

server.listen(3333)
