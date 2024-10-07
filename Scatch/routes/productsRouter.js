const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("hey is products");
});

module.exports = router;