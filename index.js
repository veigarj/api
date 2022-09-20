// chamar express
const express = require('express');
// chamar express
const app = express();

// le a requisição em Json

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Rotas - Endpoints

// rota Get
app.get('/', (req, res) => {
  // envia conteudo de res.json
  // status para Get = status(200) sucesso
  res.status(200).json({ message: 'conteudo que aparece na tela' });
});

// rota Post
app.post('/createproduct', (req, res) => {
  // 2 parametros
  const name = req.body.name;
  const price = req.body.price;

  // O Campo é obrigatorio
  if (!name) {
    res.status(422).json({ message: 'O campo nome é obrigatorio' });
    return;
  }

  console.log(name);
  console.log(price);

  // envia mensagem de sucesso do Post
  // sem status = res.json({ message: `O produto ${name} foi criado com sucesse` });
  // para colocar o status inclui -- status(codigo status) --
  res.status(201).json({ message: `O produto ${name} foi criado com sucesse` });
});

// escutar alguma porta
app.listen(3000);
