require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
const api = process.env.API_URL
app.use(cors())
app.options('*', cors())

// Schemas
const Product = require('./models/product')

// Routes
const productsRouter = require('./routers/products')
const usersRoutes = require('./routers/users')
const ordersRoutes = require('./routers/orders')
const categoriesRoutes = require('./routers/categories')

// Middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))


// Routers
app.use(`${api}/products`, productsRouter)
app.use(`${api}/users`, usersRoutes)
app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/orders`, ordersRoutes)


// DB connect
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'shop-database',
    useFindAndModify: false,
})
    .then(() => {
        console.log('DB connected success')
    })
    .catch(err => {
        console.log('DB error connect', err);
    })


app.listen(3080, () => { console.log('Server started http://localhost:3080/') })