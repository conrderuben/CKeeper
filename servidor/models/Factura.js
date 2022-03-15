module.exports=(sequelize,DataTypes)=>{
    const Factura=sequelize.define("Factura",{
    id_factura:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fechaEmision:{
        type:DataTypes.DATE,
        allowNull:false
    },
    tipo:{
        type:DataTypes.STRING(20),
        allowNull:false
    }
    //id_alquiler
    })
    return Factura
    }