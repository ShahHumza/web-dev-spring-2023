const products = require('./controllers/products')

const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000; //change this if you have an error

app.get('/', (req, res) => {
  res.send('Hello World! From Express')
})
.use('/products', products)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

