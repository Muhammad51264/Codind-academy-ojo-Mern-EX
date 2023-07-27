const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
res.send("welcome");
});

const userRouter = require('./routes/users')
app.use("/users",userRouter);

app.listen(3000,() => {
    console.log('your port is running on port 3000');
});