# 🎮 Loja Games - Backend API

<div align="center">
  <img width="1024" height="1024" alt="ChatGPT Image 29 de set  de 2025, 22_14_06" src="https://github.com/user-attachments/assets/f202edf2-b699-4268-82b6-f5145f5d7e98" />

  
  ### Sistema de Gerenciamento de Loja de Games
  
  ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
  ![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white)
</div>

---

## 📋 Sobre o Projeto

API RESTful desenvolvida com **Nest.js** para gerenciamento completo de uma loja de games. O sistema permite o cadastro, consulta, atualização e exclusão de produtos e categorias, com relacionamento estruturado entre as entidades.

Este projeto foi desenvolvido como atividade prática do bootcamp da **Generation Brasil**, aplicando conceitos de arquitetura em camadas, boas práticas de desenvolvimento e padrões REST.

---

## 🚀 Funcionalidades

### 📦 Produtos
- ✅ Cadastrar novo produto
- ✅ Listar todos os produtos
- ✅ Buscar produto por ID
- ✅ Buscar produtos por nome
- ✅ Atualizar informações do produto
- ✅ Deletar produto

### 📂 Categorias
- ✅ Cadastrar nova categoria
- ✅ Listar todas as categorias
- ✅ Buscar categoria por ID
- ✅ Buscar categorias por tipo
- ✅ Atualizar informações da categoria
- ✅ Deletar categoria

### 🔗 Relacionamentos
- Relacionamento **One-to-Many** entre Categoria e Produto
- Uma categoria pode ter vários produtos
- Um produto pertence a apenas uma categoria

---

## 🛠️ Tecnologias Utilizadas

- **[Nest.js](https://nestjs.com/)** - Framework Node.js progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem
- **[TypeORM](https://typeorm.io/)** - ORM para TypeScript e JavaScript
- **[MySQL](https://www.mysql.com/)** - Sistema de gerenciamento de banco de dados
- **[Class Validator](https://github.com/typestack/class-validator)** - Validação de dados
- **[Class Transformer](https://github.com/typestack/class-transformer)** - Transformação de objetos

---

## 📁 Estrutura do Projeto

```
src/
├── categoria/
│   ├── entities/
│   │   └── categoria.entity.ts
│   ├── categoria.controller.ts
│   ├── categoria.service.ts
│   └── categoria.module.ts
├── produto/
│   ├── entities/
│   │   └── produto.entity.ts
│   ├── produto.controller.ts
│   ├── produto.service.ts
│   └── produto.module.ts
├── app.module.ts
└── main.ts
```

---

## ⚙️ Instalação e Configuração

### Pré-requisitos
- Node.js (v16 ou superior)
- MySQL (v8 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/loja-games.git
cd loja-games
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o banco de dados**

Crie um banco de dados MySQL:
```sql
CREATE DATABASE db_loja_games;
```

4. **Configure as credenciais**

Edite o arquivo `src/app.module.ts` com suas credenciais do MySQL:
```typescript
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'db_loja_games',
  // ...
})
```

5. **Execute a aplicação**
```bash
# Modo desenvolvimento
npm run start:dev

# Modo produção
npm run start:prod
```

A API estará disponível em `http://localhost:3000`

---

## 📡 Endpoints da API

### Categorias

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/categorias` | Lista todas as categorias |
| GET | `/categorias/:id` | Busca categoria por ID |
| GET | `/categorias/tipo/:tipo` | Busca categorias por tipo |
| POST | `/categorias` | Cria nova categoria |
| PUT | `/categorias` | Atualiza categoria existente |
| DELETE | `/categorias/:id` | Deleta categoria |

### Produtos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/produtos` | Lista todos os produtos |
| GET | `/produtos/:id` | Busca produto por ID |
| GET | `/produtos/nome/:nome` | Busca produtos por nome |
| POST | `/produtos` | Cria novo produto |
| PUT | `/produtos` | Atualiza produto existente |
| DELETE | `/produtos/:id` | Deleta produto |

---

## 📝 Exemplos de Requisições

### Criar Categoria
```http
POST /categorias
Content-Type: application/json

{
  "tipo": "RPG"
}
```

### Criar Produto
```http
POST /produtos
Content-Type: application/json

{
  "nome": "The Legend of Zelda: Breath of the Wild",
  "descricao": "Jogo de aventura em mundo aberto",
  "console": "Nintendo Switch",
  "preco": 299.90,
  "foto": "https://exemplo.com/zelda.jpg",
  "categoria": {
    "id": 1
  }
}
```

### Atualizar Produto
```http
PUT /produtos
Content-Type: application/json

{
  "id": 1,
  "nome": "The Legend of Zelda: Breath of the Wild",
  "descricao": "Aventura épica em mundo aberto",
  "console": "Nintendo Switch",
  "preco": 279.90,
  "foto": "https://exemplo.com/zelda.jpg",
  "categoria": {
    "id": 1
  }
}
```

---

## 🗄️ Modelo de Dados

### Tabela: tb_categorias
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INT | Chave primária (auto increment) |
| tipo | VARCHAR(100) | Tipo da categoria |

### Tabela: tb_produtos
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INT | Chave primária (auto increment) |
| nome | VARCHAR(100) | Nome do produto |
| descricao | VARCHAR(500) | Descrição do produto |
| console | VARCHAR(100) | Console/plataforma |
| preco | DECIMAL(10,2) | Preço do produto |
| categoriaId | INT | Chave estrangeira (categoria) |

---

## 🧪 Testando a API

Utilize o **Insomnia**, **Postman** ou **Thunder Client** para testar os endpoints.

Ordem recomendada para testes:
1. Criar categorias
2. Criar produtos vinculados às categorias
3. Testar as buscas e filtros
4. Testar as atualizações
5. Testar as exclusões

---

## 🎯 Boas Práticas Implementadas

- ✅ Arquitetura em camadas (Entity, Service, Controller)
- ✅ Padrão de design Repository
- ✅ Validação de dados com decorators
- ✅ Tratamento de exceções HTTP
- ✅ Relacionamento entre entidades
- ✅ Código tipado com TypeScript
- ✅ Separação de responsabilidades
- ✅ Nomenclatura consistente e semântica

---

## 👨‍💻 Desenvolvedor

Desenvolvido com 💚 por **Paulo Henrique Belarmino**

- GitHub: [@Phcode007]([https://github.com/seu-usuario](https://github.com/Phcode007))
- LinkedIn: [Paulo Henrique Belarmino]([https://linkedin.com/in/seu-perfil](https://www.linkedin.com/in/paulo-henrique-belarmino-ads))

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do bootcamp da **Generation Brasil**.

---

## 🙏 Agradecimentos

- **Generation Brasil** - Pela oportunidade e conhecimento compartilhado
- **Comunidade Nest.js** - Pela excelente documentação
- **Instrutores** - Pelo suporte durante o desenvolvimento

---

<div align="center">
  <strong>⭐ Se este projeto foi útil, considere dar uma estrela no repositório! ⭐</strong>
</div>
