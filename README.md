# Equalijobs

Equalijobs é uma plataforma que visa empregabilidade e acompanhamento de carreira de pessoas com deficiência.

## ✅Arquitetura

        Arquitetura MVC
        |
        \--📂 EQUALIJOBS
            |   README.md  
            |   .env
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   **server.js**
            \--📂 node_modules
            \--📂src
                |
                |   **app.js**
                |
                📂---controllers
                |       **companyController.js
                |       userController.js**
                |
                📂---middleware
                |       **auth.js**
                |          
                |
                📂---models
                |       **companyModel.js
                |       userModel.js**
                |       
                |
                📂---routes
                |       **companyRoutes.js
                |       mainRoutes.js
                |       userRoutes.js
                |
                📂---utils
                |   **appError.js
                |_


## ✅Instalação

Use o gerenciador de pacotes [npm](https://docs.npmjs.com/cli/v6/using-npm) para instalar a API Equalijobs.


```
npm install && npm start
```

Para acessar via Heroku, acesse o [link da API](https://equalijobs.herokuapp.com/)

Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

## ✅Tecnologias

- [x] [JavaScript](https://www.javascript.com/)
- [x] [Git/Github](https://github.com/)
- [x] [Node.js](https://nodejs.org/en/)
- [x] [MongoDb](https://www.mongodb.com/)
- [x] [Mongoose](https://mongoosejs.com/)
- [x] [Nodemon](https://nodemon.io/)
- [x] [Express](https://expressjs.com/pt-br/)
- [x] [dotenv](https://www.npmjs.com/package/dotenv)
- [x] [cors](https://www.npmjs.com/package/cors)
- [x] [heroku](https://dashboard.heroku.com/apps)
- [x] [bcrypt](https://www.npmjs.com/package/bcrypt)
- [x] [JWT](https://jwt.io/)

## ✅Features

Funcionalidades da aplicação

- [x] Cadastros - POST
- [x] Autenticação
- [x] Sistema de login


## ✅Contribuições

Pull requests são bem vindos. Para mudanças significativas, por favor abra um issue para discutir essas mudanças.

Tenha certeza de atualizar os testes de acordo com as mudanças.

### 🚧 Projeto em Construção

        Relação entre Models
        Métodos em CRUD
        Finalização do Front End
