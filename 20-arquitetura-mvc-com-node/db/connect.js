import { Sequelize } from "sequelize";

const sequelize =  new Sequelize('db-mvc', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao mysql')

} catch (error) {
    console.log(error)
}

export default sequelize