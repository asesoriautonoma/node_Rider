const mongoose = require("mongoose");

const dbConnect = () => {
const DB_URI = process.env.DB_URI;
mongoose.set('strictQuery',true);

mongoose.connect(DB_URI, {
    userNewUrlParser: true,
    userUnifiedTopology: true,
}, (err, res) => {
    if(!err){
        //console.log(err)
        console.log("*******CONEXION EXITOSA******");
    }else {
        console.log("******FALLA EN CONEXIÓN**********")
    }
} );
};

module.exports = dbConnect

