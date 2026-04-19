FROM node:20

WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (cache otimizado)
COPY package*.json ./

# Instala tudo de uma vez
RUN npm install

# Copia o resto do projeto
COPY . .

# Build da aplicação
RUN npm run build

# Inicia o app
CMD ["npm", "run", "start"]