const express = require("express");
const app = express();
const path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));


async function ativacaoServidor() {
    app.get('/', function(req, res) {
        res.render('index')
    });

    console.log('Servidor ativo na porta 4000...')
    app.listen(4000)
}

ativacaoServidor();