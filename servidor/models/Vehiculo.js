module.exports=(sequelize,DataTypes)=>{
    const Vehiculo=sequelize.define("Vehiculo",{
    id_vehiculo:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    tipo:{
        type:DataTypes.STRING(1),
        allowNull:false
    },
    fechaMatriculacion:{
        type:DataTypes.DATE,
        allowNull:false
    },
    //id_usuario
    //id_marca
    })
    return Vehiculo
    }