
const express = require("express");
const router = express.Router();
//usando destructuración con {}
const {getItems, getItem} = require ("../controllers/tracks");

// Todo http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems)
router.get("/:id", getItem)

/*
router.get("/", (req,res) => {
    const data = ["hola","mundo"]
    res.send({data})
})
*/

module.exports = router


