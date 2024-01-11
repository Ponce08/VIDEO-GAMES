const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Videogame', {

    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },

    name:{
      type: DataTypes.STRING,
      allowNull:false,
    },

    description:{
      type: DataTypes.STRING,
      allowNull:false,
    },

    platforms:{
      type:DataTypes.STRING,
      allowNull:false
    },

    imagen:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },

    fecha_De_Lanzamiento:{
      type:DataTypes.STRING,
      allowNull:false
    },

    rating:{
      type:DataTypes.FLOAT,
      allowNull:false,
    }
  }, { timestamps: false });
};
