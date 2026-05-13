const { gerarRespostaGemini } = require('../services/geminiService')

async function gerarResposta(req, res) {

    const { interesse } = req.body

    if (!interesse) {
        return res.status(400).json({
            erro: 'O campo interesse é obrigatório'
        })
    }



    try {
        const resposta = await gerarRespostaGemini(interesse)

        res.json({
            sucesso: true,
            resposta
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao gerar resposta',
            descricao: error
        })
    }
}

module.exports = {
    gerarResposta
}