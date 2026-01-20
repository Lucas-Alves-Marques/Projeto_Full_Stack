import express from 'express';

const app = express();

app.get('/', (req, resp) => {

    resp.send ("Servidor Online 🛜")

});

app.listen(3000, () => console.log("Servidor Rodando na Porta 3000"));