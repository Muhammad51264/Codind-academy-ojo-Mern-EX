const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/greet/:id", (req, res) => {
    const name=req.params.id;
    res.send(`Hello, ${name}!`);
});

app.get("/query", (req, res) => {
    const {message}=req.query;
    res.send(message);
});

app.get("/data", (req, res) => {
    let file =JSON.parse(fs.readFileSync("list.json"));
    res.json(file);
});

app.post("/info", (req, res) => {
    let file =req.body;
    console.log(file)
    res.json(file);
});


app.use(session({
    secret: '1',
    resave: false,
    saveUninitialized: false
  }));

  app.get("/setsession", (req, res) => {
    req.session.username = "Muhammad";
    res.send(`Hello, World ${req.session.username}`);
});

app.get('/setcookie', (req, res) => {
    res.cookie('username', 'Muhammad');
    res.send("value set");
  });

  app.get('/getCookie', (req, res) => {
    const username = req.cookies.username;
    res.send(`Cookie value: ${username}`);
  });
  
  app.post('/user', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("invalid")
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("valid");
    console.log("valid")
  });



const userRouter= require("./routes/users");
app.use("/users",userRouter);


app.listen(3000, () => {
console.log("server is listening on port 3000");
});




