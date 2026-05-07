const express = require('express')

const router = express.Router()

const {
    gerarResposta
} = require('../controllers/assistenteController')
const { gerarRespostaGPT } = require('../services/openaiService')

router.post('/assistente-vendas', gerarRespostaGPT)

module.exports = router