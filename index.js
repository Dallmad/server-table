const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const items = require('./items-router')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/items',items)

app.use((req, res) => {
    res.send(404)
})

const port = process.env.PORT

app.listen(port, function () {
    console.log('Table server')
})