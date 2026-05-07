const OpenAI = require('openai')

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

async function gerarRespostaGPT(interesse) {

    const prompt = `
Você é um assistente de vendas de roupas.

Cliente:
${interesse}
`

    const resposta = await openai.chat.completions.create({
        model: 'gpt-4.1-mini',
        messages: [
            {
                role: 'system',
                content: prompt
            }
        ]
    })

    return resposta.choices[0].message.content
}

module.exports = {
    gerarRespostaGPT
}