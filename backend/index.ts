import express from 'express';
const app = express();
const port = 3000;

import { Recept, ReceptFactoryStub } from './ReceptFactoryStub';

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/recepts', (req, res) => {
    let fabrica = new ReceptFactoryStub();
    let recepts = fabrica.GetRecepts();
    res.json(recepts);
});

app.use(function(req, res, next){
    console.log('app.use call!');
    res.status(404);
    res.json({Error : `Not found path-'${req.url}' `})
    next();
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});