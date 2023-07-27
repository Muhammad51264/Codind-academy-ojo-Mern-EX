const express = require('express');
const router = express.Router();
const fs = require("fs");
router.use(express.json());
let users=JSON.parse(fs.readFileSync("usersList.json"));
router.get('/', (req, res) => {
    res.json(users);
});

router.get('/new', (req, res) => {
    res.send("User New Form")
});

router.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    fs.writeFileSync("usersList.json", JSON.stringify(users));
    res.json(users);
});


router.get("/:id",(req,res) => {
    const userId = parseInt(req.params.id);
    const user=users.find((ur)=>ur.id === userId);
    if (user===undefined){
        res.status(500).send("Internal Server Error");}
    res.json(user); 
});

router.put("/:id",(req,res) => {
    const editedUser =req.body.name;
    const userId = parseInt(req.params.id);
    users[userId].name = editedUser;
    fs.writeFileSync("usersList.json", JSON.stringify(users));
    res.send(`put user With ID ${req.params.id}`)
});

router.delete("/:id",(req,res) => {
    const userId = parseInt(req.params.id);
    newUsers=users.filter((ur)=>ur.id !== userId);
    users=newUsers;
    res.send(`delete user With ID ${req.params.id}`)
});


module.exports = router

