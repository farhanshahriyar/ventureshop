import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db' // for db conenction
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
    const product = products.find(p=> p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running ${process.env.NODE_ENV} mode on port ${PORT}`))