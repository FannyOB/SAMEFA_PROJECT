const express = require('express')

const app = express()

const port = 3000

app.get('/', (req,res) => res.send('Hello, Express 2 ! '))

app.listen(port, ()  => console.log(`Notre application Node est démarée sur : http://localhost:${port}` ))