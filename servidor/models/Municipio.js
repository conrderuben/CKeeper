module.exports=(sequelize,DataTypes)=>{
    const Municipio=sequelize.define("Municipio",{
    id_municipio:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
   nombre:{
        type:DataTypes.STRING(25),
        unique:true,
        allowNull:false
    }
    })
    return Municipio
    }