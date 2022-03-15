module.exports=(sequelize,DataTypes)=>{
    const Ubicacion=sequelize.define("Ubicacion",{
    id_ubicacion:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    calle:{
        type:DataTypes.STRING(25),
        allowNull:false
    },
    codigoPostal:{
        type:DataTypes.STRING(5),
        allowNull:false
    },
    numero:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
    //id_municipio
    })
    return Ubicacion
    }