module.exports=(sequelize,DataTypes)=>{
    const Alquiler=sequelize.define("Alquiler",{
    id_alquiler:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fechaInicio:{
        type:DataTypes.DATE,
        allowNull:false
    },
    fechaFin:{
        type:DataTypes.DATE,
        allowNull:false
    },
    arrendador:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    },
    arrendatario:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    }
    })
    return Alquiler
    }