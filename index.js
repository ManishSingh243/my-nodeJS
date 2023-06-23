const http = require('http')

const express = require('express')

const app = express()

app.use((req, res, next)=>{
  console.log("Hello, I'm from Mumbai")
  next()
})

app.use((req, res, next)=>{
  console.log("Hello, I'm from India")
  res.send("<h1>Hello!!!</h1>")
})

app.listen(4000)
