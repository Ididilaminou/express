'use strict'
const PORT = 3007

const express = require('express')
const app = express()


const genererpageAcceuil = require('./pages/index-get.js')

app.get('/', async(req, res)=>{
    const  indexHTML = await genererpageAcceuil()

    res.send(indexHTML)
})

app.use('images', express.static('public'))

app.listen(PORT, ()=>{
    console.log('serveur demarrer avec succes : http://localhost:${PORT}');
    
})