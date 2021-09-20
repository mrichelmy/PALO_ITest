const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3306;
const productsRouter = require('./routes/products');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors())

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/products', productsRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});