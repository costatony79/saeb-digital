const Sequelize = require("sequelize");
const connection = require("./database");

const Matd5 = connection.define("Matd5", {
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    q1:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q2:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q3:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q4:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q5:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q6:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q7:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q8:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q9:{
        type: Sequelize.STRING,
        allowNull: false
    },
    q10:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

Matd5.sync({force: false}).then(() => {});

module.exports = Matd5;