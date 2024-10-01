// //! FILE SYSTEM OPERATION
// const fs = require('fs');

// fs.unlink("hello.txt", (err) => {
//     if(err) console.log(err.message);
//     else console.log("Done"); 
// });




// // ! UNDERSTAING HTTP AND HTTPS
// const http = require('http');

// const server = http.createServer(function(req, res){
//     res.end("My First server!");
// })
  
// server.listen(3000);



// // ! Express js setup
// const express = require('express')
// const app = express()

// app.use(express.json()); // its used convert data in computer readable vice-versa
// app.use(express.urlencoded({extended: true}));    

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/profile', function (req, res) {
//     res.send('This is profile page')
// })

// app.listen(3000) 





// ! Dynamic routing
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
})

app.get("/profile/:username", function(req, res){ 
    res.send(`Welcome ${req.params.username}`);
})

app.get("/profile/:username/:age", function(req, res){ 
    res.send(`Welcome ${req.params.username} of age ${req.params.age}`);
})

app.listen(3000, function(){
    console.log("Runing");
});