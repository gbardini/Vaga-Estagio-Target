# Vaga-Estagio-Target

Projeto contendo a resolução dos desafios para a vaga de estágio na Target Sistemas

Código realizado nas versões:

Node.js v18.17.1

# Node.js Project - Algoritmos

Bem-vindo ao repositório de algoritmos em Node.js! Este projeto contém diferentes arquivos de algoritmo que podem ser executados diretamente usando o Node.js.

## Requisitos

Certifique-se de ter o seguinte instalado em seu sistema antes de executar o projeto:

- **Node.js**: Você pode baixá-lo [aqui](https://nodejs.org/).

Para verificar se o Node.js está instalado corretamente, execute o comando:

```bash
node -v
```

Se o Node.js estiver instalado corretamente, isso imprimirá a versão do Node.js.

## Como Executar

Aqui estão os passos para rodar os arquivos de algoritmos:

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/gbardini/Vaga-Estagio-Target-Sistemas.git
```

Navegue até o diretório do projeto:

```bash
cd Vaga-Estagio-Target-Sistemas.git
```

Execute cada arquivo individualmente usando o comando node. Os arquivos disponíveis são:

- algoritmo-2.js
- algoritmo-3.js
- algoritmo-4.js
- algoritmo-5.js

Para executar um arquivo, use o seguinte comando:

```bash
node caminho/do/arquivo/algoritmo-2.js
```

Substitua caminho/do/arquivo/ pelo caminho relativo onde seus arquivos estão armazenados. Por exemplo, se os arquivos estiverem na raiz do projeto, basta:

```bash
node algoritmo-2.js
```

Da mesma forma, para executar os outros arquivos:

```bash
node algoritmo-3.js
node algoritmo-4.js
node algoritmo-5.js
```

## Utilizando os arquivos JSON

Há um diretório chamado data dentro do projeto que contém dois arquivos JSON. Esses arquivos são usados como fonte de dados para alguns dos algoritmos.

**Localização:** data/dados.json e data/dados-algoritmo-4.json
Esses arquivos contêm informações no formato chave-valor;

```json
[
  {
    "dia": "2024-09-01",
    "valor": 100.5
  },
  {
    "dia": "2024-09-02",
    "valor": 200.75
  }
]
```

Para garantir que os algoritmos consigam acessar esses arquivos JSON, certifique-se de que eles estejam na pasta data dentro do projeto.

## Output

Cada arquivo de algoritmo executará suas operações e imprimirá a saída correspondente diretamente no console.

## Estrutura do Projeto

```
├── algoritmo-2.js
├── algoritmo-3.js
├── algoritmo-4.js
├── algoritmo-5.js
├── data
│   ├── dados.json
│   └── dados-algoritmo-4.json
└── README.md
```
