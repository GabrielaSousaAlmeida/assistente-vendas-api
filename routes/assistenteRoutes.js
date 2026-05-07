const express = require('express')
const router = express.Router()
const { gerarResposta } = require('../controllers/assistenteController')

router.post('/assistente-vendas', gerarResposta)

module.exports = router