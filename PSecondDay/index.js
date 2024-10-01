const express = require('express'); // use express by acquaring from node package
const path = require("path"); // same for path
const app = express(); // initailazing app = express
const fs = require('fs'); // same for fs acquaring from npm pckg

app.set("view engine", "ejs"); // here we set ejs as a template engine
app.use(express.json()); // it help to convert data into computer and human readable form 
app.use(express.urlencoded({extended: true}));  // use to handle form data 
app.use(express.static(path.join(__dirname, "public")));  // use to redirect to public folder location

app.get('/', function(req, res){ 
    fs.readdir(`./files`, function(err, files){ 
        res.render("index", {files: files});
    })
})

app.get('/file/:filename', function(req, res){ // dynamic routing
    fs.readFile(`./files/${req.params.filename}`, "utf-8" , function(err, filedata){ // it'll read your files
        res.render('show', {filename: req.params.filename, filedata: filedata}); // it'll show the data of title and details in show page.
    })
})

app.get('/edit/:filename', function(req, res){
     res.render('edit', {filename: req.params.filename});
})

app.post('/edit', function(req, res){
    fs.rename(`./files/${req.body.previous}` , `./files/${req.body.new}.txt`, function(err){
        res.redirect("/");
    })
})

app.post('/create', function(req, res){ // routing 
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){ // create a file into files folder everytime for every task
        res.redirect("/"); // its redirect to main page
    })
})

app.listen(3000) // port