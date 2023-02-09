
const express = require("express");
const fs = require("fs");
const router = express.Router();

//Obtine el path o toda la ruta en donde se encuentra el archivo
const PATH_ROUTES = __dirname;
//función que separa nombre de archvo con extención 
//y los almacena en dos posiciones diferentes de arreglo
const removeExtension = (fileName) => {
    // Todo  tracks.js ['tracks, js']
    return fileName.split('.').shift()
}

//Filtra la ruta completa de carpeta routes, tomando unicamente 
//lo que esta al final es decir el archivo final con su extención
//file por tanto tendra index.js o tracks.js
fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) //Puede llegar index o tracks sin extención
    if (name !== 'index') {
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`)) //esto lee http://localhost:3001/tracks, store o user
    }

})

module.exports = router;