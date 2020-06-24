//Importar a dependencia do sqlite3

const sqlite3 = require('sqlite3')
sqlite3.verbose()

//Iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db')

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
    //Criar uma tabela

    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );        
    `)


    //Inserir dados na tabela


    //Consultar os dados da tabela


    //Deletar um dado da tabela
})