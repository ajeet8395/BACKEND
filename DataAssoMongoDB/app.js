const express = require("express");
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("hey");
})

app.get("/create", async (req, res) => {
    let user = await userModel.create({
        username: "ajeet",
        email: "ajeet567@gmail.com",
        age: 25
    });

    res.send(user);
})

app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata: "helo ishika chokhani",
        user: "66fac4add700be224468d03f"
    })

    let user = await userModel.findOne({_id: "66fac4add700be224468d03f"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(3000);
