mongoose =require ("mongoose")
const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        age:{
            type:Number,
        },
        email:{
            type:String,
            unique: true,
        },
        password:{
            type:String,
        },
        role:{
            type:["user","admin"],
            defaul: "user",
        },
    },
    {
        timestamps: true, //CreatedAd, updatedAt
        versionKey: false,
    }
)

//Exporta la coleccion con el esquema cuyo nombre corresponde a users
//una coleccion es lo mismo que una tabla en sql
module.exports = mongoose.model("users", UserScheme);