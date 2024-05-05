<!DOCTYPE html>
<html lang="pt-br">
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
        }
        p {
            margin-bottom: 20px;
        }
        .list-item {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Desafio de Frontend MKS</h1>
        <p>Este projeto foi desenvolvido como parte do desafio de frontend da MKS. O objetivo principal deste desafio era criar uma aplicação que consuma a API REST de produtos da MKS e exiba uma lista de produtos da loja, além de um carrinho funcional.</p>
        <h2>Funcionalidades</h2>
        <div class="list-item">
            <h3>Loja:</h3>
            <p>A lista de produtos é obtida da API REST da MKS. Um shimmer/skeleton é exibido enquanto os dados estão sendo carregados.</p>
        </div>
        <div class="list-item">
            <h3>Carrinho:</h3>
            <p>O carrinho exibe todos os produtos selecionados, permitindo também aumentar a quantidade de cada produto.</p>
        </div>
        <h2>Recursos Utilizados</h2>
        <p>UI/UX: O design da aplicação foi baseado no Figma fornecido pela MKS, utilizando o design system e a fonte inclusos.</p>
        <p>API: API REST de produtos da MKS</p>
        <p>Ferramentas:</p>
        <ul>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>React-query</li>
            <li>Styled-components</li>
            <li>Framer-motion</li>
            <li>Jest</li>
        </ul>
        <h2>Pré-requisitos</h2>
        <p>Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:</p>
        <ul>
            <li>Node.js</li>
            <li>npm ou yarn</li>
        </ul>
        <h2>Instalação</h2>
        <p>Clone o repositório:</p>
        <pre><code>git clone [https://github.com/seu-usuario/mks-frontend-challenge.git](https://github.com/ArturAbreuDev/mks-challenge.git)</code></pre>
        <p>Instale as dependências:</p>
        <pre><code>cd mks-frontend-challenge
npm install # ou yarn install</code></pre>
        <h2>Execução</h2>
        <p>Para executar a aplicação localmente, utilize o seguinte comando:</p>
        <pre><code>npm run dev # ou yarn dev</code></pre>
    </div>
</body>
</html>
