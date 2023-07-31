import express from 'express';
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
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