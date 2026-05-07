async function gerarResposta(req, res) {

    const { interesse } = req.body

    if (!interesse) {
        return res.status(400).json({
            erro: 'O campo interesse é obrigatório'
        })
    }

    res.json({
        sucesso: true,
        mensagem: `Cliente interessado em: ${interesse}`
    })
}

module.exports = {
    gerarResposta
}