
const {tracksModel} = require('../models')

/**
 * Obtener lista de la base de datos  
 * @param {*} req
 * @param {*} res
 */
//El req o request y res o respons es lo que envia como parametros express

const getItems = async (req, res) => {
    //espera hasta que encuentre todos los datos en el tracksModel
    const data = await tracksModel.find({});
     /*
    const data = ["hola","mundo"]
    res.send({data})
    */
    res.send({data});
 };

 //asi seria otra manera con promesas
 /*
const getItems = (req, res) => {
    tracksModel.find({}).then(res) => {console.log});
    res.send({data});
 };
*/

/**
 * obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => { };

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = (req, res) => { };

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => { };

/**
 *  Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */

const deleteItem = (req, res) => { };

//Cuando se exporta de esta manera, es decir con llaves, se llama destructuración
module.exports = { getItems, getItem, createItem, updateItem, deleteItem };

