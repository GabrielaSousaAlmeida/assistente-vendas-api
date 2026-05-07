require('dotenv').config()

const express = require('express')
const cors = require('cors')

const assistenteRoutes = require('./routes/assistenteRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', assistenteRoutes)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})