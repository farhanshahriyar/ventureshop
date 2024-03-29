import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js' // for db conenction
import products from './data/products.js' //product c

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('ventures api is running.....!')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    console.log(req.params)
    const product = products.find((p) => p._id === parseInt(req.params.id))
    console.log(product)
    res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))