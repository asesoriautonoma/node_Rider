const mongoose = require("mongoose");

const database = ()=>{
    try {
        mongoose.set("strictQuery", false)
        mongoose.connect("mongodb+srv://roberto:8nvSMCzYV9Tn22Dq@cluster0.bhwmtm1.mongodb.net/?retryWrites=true&w=majority")
        console.log("Conectado exitosamente");
    } catch (error) {
        console.log(error)
    }
}

module.exports = database

