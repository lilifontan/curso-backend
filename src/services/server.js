//SETEO DE SERVER//////////////////////////////////////////////////////////////////////////////////
const express = require ('express')
const mirouterProductos = require ('../routes/index')

const app = express ()
app.use (express.json())
app.use (express.urlencoded({extended: true}))

app.use ('/productos', mirouterProductos)

module.exports = app