require('dotenv').config()
const express = require('express')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')
const massive = require('massive')


const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => {
    console.log(`Praying for hope on ${SERVER_PORT}`)
  })

})

app.get('/api/product', ctrl.getProducts)
app.post('/api/product', ctrl.addProduct)




