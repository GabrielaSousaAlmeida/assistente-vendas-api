# Assistente de Vendas para Loja de Roupas 👗🛍️

Projeto desenvolvido para estudo com foco em integração de APIs de Inteligência Artificial aplicadas ao atendimento comercial.

O sistema funciona como um assistente de vendas humanizado para lojas de roupas, sendo capaz de:

- Identificar oportunidades de venda
- Sugerir upsell e cross-sell
- Gerar mensagens prontas para WhatsApp
- Criar ofertas de forma natural e consultiva
- Analisar o perfil e a intenção do cliente

---

# Objetivo do Projeto

O principal objetivo deste projeto foi desenvolver uma API integrada com modelos de IA para simular um atendimento comercial mais humano e estratégico no segmento de moda e varejo.

O assistente foi projetado para ajudar vendedores a:

- Aumentar conversão
- Melhorar experiência do cliente
- Aumentar ticket médio
- Criar abordagens mais naturais e personalizadas

---

# Como Utilizar o Projeto 🚀

O projeto possui duas versões da API em branches diferentes:

- `master` → versão utilizando OpenAI (GPT)
- `gemini` → versão utilizando Google Gemini

Você pode escolher qual versão deseja executar.

---

## 1) Clonar o repositório

```bash
git clone https://github.com/GabrielaSousaAlmeida/assistente-vendas-api
```

---

## 2) Entrar na pasta do projeto

```bash
cd assistente-vendas-api
```

---

# Escolher a Branch da API

## Versão OpenAI (GPT)

Essa versão utiliza a API da OpenAI.

⚠️ Observação:  
Para realizar interações, é necessário possuir créditos na OpenAI.

```bash
git checkout master
```

---

## Versão Google Gemini

Essa versão utiliza a API Gemini do Google.

✅ Observação:  
A API Gemini possui opção gratuita para testes e estudos.

```bash
git checkout gemini
```

---

## 3) Instalar as dependências

```bash
npm install
```

Esse comando irá instalar automaticamente a pasta `node_modules` com todas as dependências do projeto.

---

# Configuração das Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto.

---

## Para OpenAI

```env
OPENAI_API_KEY=sua_chave_aqui
```

---

## Para Gemini

```env
GEMINI_API_KEY=sua_chave_aqui
```

---

## 4) Executar o projeto

```bash
npm run dev
```

Após executar o comando, o servidor será iniciado localmente.

---

# Tecnologias Utilizadas 🚀

- Node.js
- JavaScript
- Postman
- API OpenAI
- API Gemini

---

# Estrutura do Projeto

Durante o desenvolvimento foram criadas duas versões da API:

## 1) Integração com OpenAI (GPT)

Inicialmente foi desenvolvida uma API utilizando o modelo GPT da OpenAI.

### Resultado:

- A API funcionou corretamente
- O código foi validado
- As respostas estavam funcionando

### Limitação encontrada:

A utilização contínua exigia créditos pagos da OpenAI para manter as interações da API.

Como o projeto foi desenvolvido em contexto de aprendizado, foi necessário buscar uma alternativa gratuita para testes e demonstração.

---

## 2) Integração com Google Gemini

Após isso, foi criada uma segunda versão em outra branch utilizando a API Gemini do Google.

### Resultado:

- API funcionando corretamente
- Testes realizados no Postman
- Respostas geradas com sucesso
- Interações funcionando gratuitamente
- Melhor viabilidade para ambiente de estudo e testes

---

# Funcionalidades do Assistente 💡

O assistente consegue:

- Interpretar o interesse do cliente
- Classificar oportunidades de venda
- Sugerir produtos complementares
- Criar estratégias de ancoragem
- Gerar mensagens prontas para WhatsApp
- Adaptar o atendimento ao perfil do cliente
- Responder de forma mais humana e natural

---

# Exemplo de Entrada

```json
{
  "interesse": "cliente quer roupa elegante para jantar"
}
```

---

# Exemplo de Resposta da API

A API retorna a resposta em formato JSON.

## Resposta JSON (crua)

```json
{
  "sucesso": true,
  "resposta": "---\n\n## A) Leitura do interesse\n\nOpa! Que legal que você está buscando um look elegante para jantar!\n\n---\n\n## B) Diagnóstico de oportunidade\n\n**Misto**\n\nCheguei a essa conclusão porque elegante para jantar pode ter várias interpretações...\n\n---\n\n## C) Perguntas de qualificação\n\n1. Para qual tipo de jantar seria?\n2. Você prefere vestido ou conjunto?\n3. Qual seria sua faixa de orçamento?\n\n---\n\n## D) Oferta principal recomendada\n\nSugiro um vestido midi em crepe ou um conjunto de alfaiataria.\n\n---\n\n## E) Upsell e Cross-sell inteligente\n\n### Upsell\n\nVestido premium com tecido mais sofisticado.\n\n### Cross-sell\n\n- Clutch\n- Scarpin\n- Acessórios\n\n---\n\n## F) Estratégia de ancoragem\n\n### Bom / Ótimo / Premium\n\n---\n\n## G) Mensagem pronta para WhatsApp\n\nOi! Que ótimo que você procura um look elegante para jantar!\n\n---"
}
```

---

# Visualização da Resposta em Markdown

Abaixo está a mesma resposta já renderizada e formatada:

---

## A) Leitura do interesse

Opa! Que legal que você está buscando um look elegante para jantar!

Isso me diz que você quer uma peça sofisticada, confortável e elegante para uma ocasião especial.

---

## B) Diagnóstico de oportunidade

**Misto**

Cheguei a essa conclusão porque um look elegante para jantar pode variar entre algo mais casual chic até um evento mais formal.

Isso abre espaço tanto para opções custo-benefício quanto para peças premium.

---

## C) Perguntas de qualificação

1. Para qual tipo de jantar seria?
2. Você prefere vestido ou conjunto?
3. Qual seria sua faixa de orçamento?
4. Tem alguma cor que você gosta mais?
5. Busca algo mais versátil ou exclusivo para a ocasião?

---

## D) Oferta principal recomendada

Sugiro um vestido midi em crepe ou um conjunto de alfaiataria.

Essas peças entregam:
- elegância
- conforto
- ótimo caimento
- versatilidade

### Como apresentar ao cliente

> "Que tal um vestido midi em crepe ou um conjunto de alfaiataria? São opções elegantes, sofisticadas e super confortáveis para jantar."

---

## E) Upsell e Cross-sell inteligente

### Upsell

Vestido premium com tecido mais sofisticado e acabamento superior.

### Cross-sell

- Clutch
- Scarpin
- Cinto fino
- Acessórios delicados

---

## F) Estratégia de ancoragem

### Bom

Peças mais práticas e versáteis.

### Ótimo

Melhor acabamento e caimento.

### Premium

Tecidos nobres, exclusividade e experiência premium.

---

## G) Mensagem pronta para WhatsApp

> "Oi! Que ótimo que você procura um look elegante para jantar! Me conta um pouco mais sobre a ocasião para eu te ajudar melhor 😊"

---

Me diga a faixa de orçamento e se o foco é mais alta qualidade ou custo-benefício para eu refinar a oferta.

---

# Testes da API 🧪

Os testes foram realizados utilizando:

- Postman
- Requisições HTTP
- Integração com API Gemini

---

# Aprendizados no Projeto 📚

Durante o desenvolvimento foi possível aprender:

- Integração com APIs de IA
- Estrutura de requisições HTTP
- Funcionamento de modelos generativos
- Tratamento de erros em APIs
- Criação de prompts eficazes
- Otimização de prompts para Gemini
- Diferenças entre OpenAI e Gemini
- Testes de API com Postman

---

# Considerações Finais

Este projeto foi desenvolvido com foco educacional e prática de integração com Inteligência Artificial aplicada ao atendimento comercial.

Além da parte técnica, também houve preocupação em criar respostas mais humanizadas, naturais e úteis para o contexto de vendas.

O projeto continuará recebendo melhorias futuras, incluindo:

- Memória de contexto
- Integração com WhatsApp
- Personalização por perfil de cliente
- Melhorias na experiência conversacional

---

# Desenvolvido por

Gabriela Sousa de Almeida
