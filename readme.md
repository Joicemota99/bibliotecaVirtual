# Biblioteca Virtual

💎 O objetivo do projeto é criar uma API, identidade visual e o frontend de uma biblioteca virtual. [PROJETO EM DESENVOLVIMENTO]

## **🛠️ Ferramentas e Linguagens**

---

- JavaScript
- SQL
- NodeJs
- Notion
- Banco de dados PostgreSQL
- Beekeeper
- Insomnia
- Git
- GitHub

---

## **👣 Passo-a-Passo**

A API deve permitir:
• Cadastrar Autor

• Cadastrar Livro

• Cadastrar Categorias 

• Buscar todos os autores

• Buscar todos os Livros

• Listar livro por categoria 

• Editar Livro

• Editar Autor 

• Deletar livro

• Deletar autor

• Deletar categoria 

**Importante : Sempre que a validação de uma requisição falhar, responda com código de erro e mensagem adequada à situação.**

## Banco de dados

---

Irei criar um banco de dados PostgreSQL, chamado dados_biblioteca contendo as seguintes tabelas e colunas: 

• livros

- id
- titulo
- data_publicacao
- subtitulo
- autor_id

• autor

- id
- nome
- data_de_nascimento
- sexo

• categorias

- id
- descricao

**IMPORTANTE: Deverá ser criado no projeto o(s) arquivo(s) SQL que deverá ser o script que cria as tabelas corretamente.**

As categorias a seguir precisam ser previamente cadastradas para que sejam listadas no endpoint de listagem das categorias.

## Categorias

---

- **Religiosos**
- Contos
- Romances
- Livros didáticos
- Gibis
- Livros de poesia
- Biografias e autobiografias
- True crime
- Autoajuda
- Ficção

**IMPORTANTE: Deverá ser criado no projeto o arquivo SQL que deverá ser o script de inserção das categorias acima na tabela.**

## Requisitos obrigatórios

---

- A API a ser criada deverá acessar o banco de dados a ser criado "dados-biblioteca" para persistir e manipular os dados de autores, livros e categorias utilizados pela aplicação.
- O campo `id` das tabelas no banco de dados deve ser auto incremento, chave primária e não deve permitir edição uma vez criado.
- Seu código deverá estar organizado, delimitando as responsabilidades de cada arquivo adequadamente. Ou seja, é esperado que ele tenha, no mínimo:
    - Um arquivo index.js
    - Um arquivo conexao.js
    - Um arquivo de rotas
    - Um pasta com controladores

## **Status Codes**

---

Abaixo, listamos os possíveis ***status codes*** esperados como resposta da API.

// 200 (OK) = requisição bem sucedida
// 201 (Created) = requisição bem sucedida e algo foi criado
// 204 (No Content) = requisição bem sucedida, sem conteúdo no corpo da resposta
// 400 (Bad Request) = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 401 (Unauthorized) = o usuário não está autenticado (logado)
// 403 (Forbidden) = o usuário não tem permissão de acessar o recurso solicitado
// 404 (Not Found) = o servidor não pode encontrar o recurso solicitado

## Endpoints

---

### Cadastrar Autor

**POST /cadastrarAutor** 

Essa é a rota que será chamada quando o usuário quiser cadastrar algum autor na biblioteca. 

- **Requisição**
    
    Sem parâmetros de rota ou de query.
    
    O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
    
    - nome
    - data_de_nascimento
    - sexo
- **Resposta**
    
    Em caso de sucesso, aparecerá uma mensagem de sucesso na tela.
    
    Em caso de falha no cadastro, a resposta deverá possuir status code apropriado, em em seu corpo (body) deverá possuir um objeto com uma propriedade mensagem que deverá possuir como valor um texto explicando o motivo da falha 
    
- **REQUISITOS OBRIGATÓRIOS**
    - Validar os campos obrigatórios:
        - nome
        - data_de_nascimento
        - sexo
    - Validar se o nome e data de nascimento já existe no banco de dados
        - Caso já exista o nome do autor que coincida com a data de nascimento, deverá aparecer uma mensagem com o status code apropriado.

---

### Cadastrar Livro

**POST /cadastrarLivro** 

Essa é a rota que será chamada quando o usuário quiser cadastrar algum Livro na biblioteca. 

- **Requisição**
    
    Sem parâmetros de rota ou de query.
    
    O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
    
    - titulo
    - data_publicação
    - subtitulo
- **Resposta**
    
    Em caso de sucesso, aparecerá uma mensagem de sucesso na tela.
    
    Em caso de falha no cadastro, a resposta deverá possuir status code apropriado, em em seu corpo (body) deverá possuir um objeto com uma propriedade mensagem que deverá possuir como valor um texto explicando o motivo da falha 
    
- **REQUISITOS OBRIGATÓRIOS**
    - Validar os campos obrigatórios:
        - titulo
        - data_publicacao
        - subtitulo
    - Validar se o titulo e subtitulo já existe no banco de dados
        - Caso já exista o titulo e subtitulo, deverá aparecer uma mensagem com o status code apropriado.

---

### Cadastrar Categoria

**POST /cadastrarCategoria**

Essa é a rota que será chamada quando o usuário quiser cadastrar alguma categoria na biblioteca. 

- **Requisição**
    
    Sem parâmetros de rota ou de query.
    
    O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
    
    - nome
- **Resposta**
    
    Em caso de sucesso, aparecerá uma mensagem de sucesso na tela.
    
    Em caso de falha no cadastro, a resposta deverá possuir status code apropriado, em em seu corpo (body) deverá possuir um objeto com uma propriedade mensagem que deverá possuir como valor um texto explicando o motivo da falha 
    
- **REQUISITOS OBRIGATÓRIOS**
    - Validar os campos obrigatórios:
        - nome
    - Validar se o nome já existe no banco de dados
        - Caso já exista o nome, deverá aparecer uma mensagem com o status code apropriado.

---

### Buscar Autor

GET /buscarAutor?nome

Essa é a rota que será chamada quando o usuario desejar buscar o nome de algum autor da biblioteca. 

- **Requisição**
    
    O parametro deve ser uma query. 
    
    Exemplo de requisição:
    
    **/buscarAutor?nome=NomeAutorAqui**
    
- **Resposta**
    
    Em caso de sucesso, deverá sair uma lista no corpo (body) do nome do autor 
    
    Em caso de falha na validação, deverá sair uma mensagem dizendo que o autor ainda não foi cadastrado. 
    
- **Requisitos obrigatórios**
    - Validar se existe autor com o mesmo nome passado na query.

---

### Buscar Livro

GET /buscarLivro/:id

Essa é a rota que será chamada quando o usuario desejar buscar o nome de algum livro da biblioteca. 

- **Requisição**
    
    O parametro deve ser uma query. 
    
    Exemplo de requisição:
    
    **/buscarLivro?nome=NomeLivroAqui**
    
- **Resposta**
    
    Em caso de sucesso, deverá sair uma lista no corpo (body) do nome do autor 
    
    Em caso de falha na validação, deverá sair uma mensagem dizendo que o autor ainda não foi cadastrado. 
    
- **Requisitos obrigatórios**
    - Validar se existe livro com o mesmo nome passado na query e mostrar os livros com o titulo e subtitulo caso tenha mais de um.

---

### Listar livros na categoria

GET /categorias/:id

Essa é a rota que será chamada quando o usuario desejar buscar livros por categoria

- **Requisição**
    
    Deverá ser enviado o ID da transação no parâmetro de rota do endpoint.
    
    O corpo (body) da requisição não deverá possuir nenhum conteúdo. 
    
- **Resposta**
    
    Em caso de sucesso, deverá sair uma lista no corpo (body) com todos os livros daquela categoria.
    
    Em caso de falha na validação, deverá sair uma mensagem dizendo que não tem livros naquela categoria. 
    
- **Requisitos obrigatórios**
    - Validar se existe livro na categoria id informada.
    - Listar todos os livros da categoria existente.

---

### Atualizar Autor

PUT /atualizarAutor

Essa é a rota que será chamada quando quisermos editar alguma informação de autores.

- **Requisição**
    
    Sem parâmetros de rota ou de query.
    
    O corpo (body) deverá possuir um objeto com as propriedades que deseja alterar
    
- **Resposta**
    
    Em caso de sucesso, deverá sair o objeto no corpo (body) com as informações atualizadas do autor
    
    Em caso de falha na validação, deverá sair uma mensagem dizendo que não tem alterações preenchidas. 
    
- **Requisitos obrigatórios**
    - Validar se todos os campos de atualizar estão preenchidos.

---

### Atualizar Livro

PUT /atualizarLivro

Essa é a rota que será chamada quando quisermos editar alguma informação de Livro.

- **Requisição**
    
    Sem parâmetros de rota ou de query.
    
    O corpo (body) deverá possuir um objeto com as propriedades que deseja alterar
    
- **Resposta**
    
    Em caso de sucesso, deverá sair o objeto no corpo (body) com as informações atualizadas do livro
    
    Em caso de falha na validação, deverá sair uma mensagem dizendo que não tem alterações preenchidas. 
    
- **Requisitos obrigatórios**
    - Validar se todos os campos de atualizar estão preenchidos.

---

### Deletar Autor

DELETE /deletarAutor/:id

Essa é a rota que será chamada quando o usuario quiser excluir algum autor cadastrado.

- **Requisição**
    
    Deverá ser enviado o ID da transação no parâmetro de rota do endpoint.
    
    O corpo (body) da requisição não deverá possuir nenhum conteúdo.
    
- **Resposta**
    
    Em caso de **sucesso**, deveremos enviar conteúdo no corpo (body) da resposta.
    
    Em caso de **falha na validação**, a resposta deverá possuir ***status code*** apropriado, e em seu corpo (body) deverá possuir um objeto com uma propriedade **mensagem** que deverá possuir como valor um texto explicando o motivo da falha.
    
- **REQUISITOS OBRIGATÓRIOS**:
    - Validar se existe autor cadastrado
    - Excluir a transação no banco de dados.

---

### Deletar Livro

DELETE /deletarLivro/:id

Essa é a rota que será chamada quando o usuario quiser excluir algum Livro cadastrado.

- **Requisição**
    
    Deverá ser enviado o ID da transação no parâmetro de rota do endpoint.
    
    O corpo (body) da requisição não deverá possuir nenhum conteúdo.
    
- **Resposta**
    
    Em caso de **sucesso**, deveremos enviar conteúdo no corpo (body) da resposta.
    
    Em caso de **falha na validação**, a resposta deverá possuir ***status code*** apropriado, e em seu corpo (body) deverá possuir um objeto com uma propriedade **mensagem** que deverá possuir como valor um texto explicando o motivo da falha.
    
- **REQUISITOS OBRIGATÓRIOS**:
    - Validar se existe Livro cadastrado
    - Excluir a transação no banco de dados.

---

### Deletar Categoria

DELETE /deletarCategoria/:id

Essa é a rota que será chamada quando o usuario quiser excluir alguma categoria cadastrado.

- **Requisição**
    
    Deverá ser enviado o ID da transação no parâmetro de rota do endpoint.
    
    O corpo (body) da requisição não deverá possuir nenhum conteúdo.
    
- **Resposta**
    
    Em caso de **sucesso**, deveremos enviar conteúdo no corpo (body) da resposta.
    
    Em caso de **falha na validação**, a resposta deverá possuir ***status code*** apropriado, e em seu corpo (body) deverá possuir um objeto com uma propriedade **mensagem** que deverá possuir como valor um texto explicando o motivo da falha.
    
- **REQUISITOS OBRIGATÓRIOS**:
    - Validar se existe a categoria cadastrada
    - Excluir somente a categoria no banco de dados e os livros com a categoria deve ficar com sem categoria.
    
    Se possível: ⭐️ Star o projeto 🐛 Encontrar e relatar issues
    
    Disponibilizado com ♥ por Joice.