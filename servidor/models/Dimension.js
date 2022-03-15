module.exports=(sequelize,DataTypes)=>{
    const Dimension=sequelize.define("Dimension",{
    id_dimension:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    alto:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    largo:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    ancho:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
    })
    return Dimension
    }