import database from "../config/database.js";

class Cliente {
    constructor() {
        this.model = database.db.define("cliente", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            senha: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
        })
    }
}

export default new Cliente().model