require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const api = process.env.API_URL



app.use(bodyParser.json())
app.use(morgan('tiny'))


// http://localhost:3080/api/v1/products
app.get(`${api}/products`, (req, res) => {
    const products = {
        id: 1,
        name: 'hair dresser',
        image: 'some_url'
    }
    res.send(products)
})

app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body
    console.log('New product', newProduct)
    res.send(newProduct)
})


app.listen(3080, () => { console.log('Server started http://localhost:3080/') })