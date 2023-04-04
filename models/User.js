const { Model, DataTypes } = require('sequelize');                       //  Import Sequelize        
const bcrypt = require('bcrypt');                                        // Import bcrypt library
const sequelize = require('../config/conection');                        // Import sequelize


class User extends Model {                                               // create user model
 
  checkPassword(loginPw) {                                               // Check password
    return bcrypt.compareSync(loginPw, this.password);                   // Compare passwords
  }
}

User.init(                                                               // Initialize User model
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]                                                         // Password length
      }
    }
  },
  {


    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);    // Hash new password
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10); // Hash updated password
        return updatedUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
);

module.exports = User;
