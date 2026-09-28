import database from "../config/database.js";

class Atendimento {
    constructor() {
        this.model = database.db.define("atendimento", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false
            },
            hora: {
                type: database.db.Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            valor: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false
            },
            concluido: {
                type: database.db.Sequelize.BOOLEAN,
                defaultValue: false
            },
        })
    }
}

export default new Atendimento().model