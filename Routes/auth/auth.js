const express = require("express");
const router = express.Router();
//@ router/http method GET
router.get('/', (req, res) => {
    res.send("I am auth router")
})

module.exports = router;