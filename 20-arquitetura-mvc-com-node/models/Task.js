import { DataTypes } from "sequelize";
import connect from '../db/connect.js'

const Tarefas = connect.define('Tarefas', {
    title: {
        type: DataTypes.STRING,
        require: true
    },
    description: {
        type: DataTypes.STRING,
        require: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        require: true
    },
})

export {Tarefas}
