module.exports=(sequelize,DataTypes)=>{
    const Marca=sequelize.define("Marca",{
    id_marca:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
   nombre:{
        type:DataTypes.STRING(20),
        unique:true,
        allowNull:false
    }
    //id_modelo
    })
    return Marca
    }