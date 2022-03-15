module.exports=(sequelize,DataTypes)=>{
    const Modelo=sequelize.define("Modelo",{
    id_modelo:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
   nombre:{
        type:DataTypes.STRING(20),
        unique:true,
        allowNull:false
    }
    })
    return Modelo
    }