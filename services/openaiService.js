const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function gerarRespostaGPT(interesse) {

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const prompt = `
        Você é um assistente de vendas especialista em roupas.

        Cliente:
        ${interesse}
    `;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return response;
}

module.exports = {
    gerarRespostaGPT
}