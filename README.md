# Sistema de Gerenciamento de Animais

API REST para gerenciamento de animais, desenvolvida com Node.js, Fastify e Prisma.

## 🚀 Tecnologias

- Node.js
- Fastify
- Prisma
- SQLite

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [https://github.com/Cristhian-Appi/backend-animals-crud/edit/main/README.md]
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure o banco de dados:
```bash
npx prisma migrate dev --schema=src/db/schema.prisma
```

4. Inicie o servidor:
```bash
npm run dev
# ou
yarn dev
```

## 📚 Estrutura do Projeto

```
src/
├── controllers/     # Controladores para lidar com as requisições HTTP
├── services/        # Serviços que implementam a lógica de negócio
├── repositories/    # Repositórios para acesso ao banco de dados
├── models/         # Modelos de domínio
├── db/             # Configuração do banco de dados
├── router.js       # Configuração das rotas
└── index.js        # Ponto de entrada da aplicação
```

## 🛠️ Endpoints

### Animais

- `POST /animals` - Criar um novo animal
- `GET /animals` - Listar todos os animais
- `GET /animals/:id` - Buscar um animal específico
- `PUT /animals/:id` - Atualizar um animal
- `DELETE /animals/:id` - Deletar um animal

## 📝 Exemplo de Requisições

### Criar Animal
```bash
curl -X POST http://localhost:3000/animals \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rex",
    "species": "Cachorro",
    "birthdate": "2020-01-01",
    "weight": 10.5,
    "gender": "male"
  }'
```

### Buscar Animal por ID
```bash
curl -X GET http://localhost:3000/animals/1
```

### Atualizar Animal
```bash
curl -X PUT http://localhost:3000/animals/1 \
  -H "Content-Type: application/json" \
  -d '{
    "weight": 11.0
  }'
```

### Deletar Animal
```bash
curl -X DELETE http://localhost:3000/animals/1
```

## 📦 Dependências Principais

- `@prisma/client`: Cliente do Prisma para acesso ao banco de dados
- `fastify`: Framework web para Node.js
- `prisma`: ORM para Node.js e TypeScript

## 🔧 Comandos do Prisma

Para executar comandos do Prisma, sempre especifique o caminho do schema:

```bash
# Gerar cliente do Prisma
npx prisma generate --schema=src/db/schema.prisma

# Criar nova migração
npx prisma migrate dev --schema=src/db/schema.prisma

# Visualizar dados no Prisma Studio
npx prisma studio --schema=src/db/schema.prisma
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 
