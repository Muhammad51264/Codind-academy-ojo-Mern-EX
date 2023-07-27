import express from 'express';
import fs from "fs";
import cors from "cors";
const app = express();
const port = 8080;
// // Body parsing middleware
app.use(cors())
app.use(express.json());

// GET route
app.get("/", (req, res) => {
  let data =fs.readFileSync("task.json").toString();
  let tasks = JSON.parse(data);
  res.json({
    out:tasks
  })
  // res.send("Hello, GET request received!");
});

// POST route
app.post("/", (req, res) => {
  const tasks = req.body; // { task:dsdsdsd }

  let data =fs.readFileSync("task.json");
let myObject= JSON.parse(data.toString());
myObject.push(tasks);
let newData = JSON.stringify(myObject);
fs.writeFile('task.json', newData, err => {
  // error checking
  if(err) throw err;
});

  res.json({ out: newData });
});

app.put("/", (req, res) => {
  const updatedTask = req.body.task;
  const updatedValue = req.body.edited;

  let data = fs.readFileSync("task.json");
  var myObject = JSON.parse(data.toString());
  var updatedIndex = myObject.findIndex(task => task.task === updatedTask);

  if (updatedIndex !== -1) {
    myObject[updatedIndex].task = updatedValue;

    var newData = JSON.stringify(myObject);
    fs.writeFile('task.json', newData, err => {
      if (err) throw err;
    });

    res.json({ out: myObject }); // Return the entire updated list
  } else {
    res.json({ error: "Task not found" });
  }
});





app.delete("/", (req, res) => {
  const deletedTask = req.body;
  console.log(deletedTask.task);
  let data = fs.readFileSync("task.json");
  var myObject = JSON.parse(data.toString());
  var updatedObject = myObject.filter(task => task.task !== deletedTask.task);
  console.log(updatedObject)
  var newData = JSON.stringify(updatedObject);
  fs.writeFile('task.json', newData, err => {
    if (err) throw err;
  });

  res.json({ out: newData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
