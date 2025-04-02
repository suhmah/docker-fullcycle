# Usa a versão mais recente do Node.js
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia apenas os arquivos de dependências para otimizar o cache do Docker
COPY package.json ./

# Instala as dependências antes de copiar o restante do código
RUN npm install

# Agora copia todos os arquivos do projeto
COPY . .

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
