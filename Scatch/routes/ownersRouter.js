const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("hey is owner");
});

module.exports = router;