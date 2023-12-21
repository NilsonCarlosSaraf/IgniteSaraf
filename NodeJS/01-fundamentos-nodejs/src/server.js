//const http = required('http') importa modulo http pro node - Esse e o padrao CommonJS => require, mas caiu em desuso

import http from 'node:http'//ESModules => import/export, para permitir o padrao amis moderno de importacao e exportacao no NODE. a Linha  "type": "module",  precisa ser adicionada no package.json para ativar essa opcao

const server = http.createServer((req, res)=>{
    return res.end('Hello World')
})

server.listen(3333)




