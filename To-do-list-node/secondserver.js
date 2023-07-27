
const newObject = { "task":"dsdsd"};

//post request to add an object to JSON file in the localhost:8080 server
// fetch('http://localhost:8080', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(newObject)
// })
//   .then(response => response.json())
//   .then(data => {
   
//     console.log(data.out);
//   })
//   .catch(error => {
//     console.log(error);
// });

// const deleteObject ={ task:1345 };
// //delete
// fetch('http://localhost:8080', {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(deleteObject)
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.out);
//   })
//   .catch(error => {
//     console.log(error);
// });


fetch('http://localhost:8080', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ task: "5", edited: "12" })

})
  .then(response => response.json())
  .then(data => {
   
    console.log(data.out);
  })
  .catch(error => {
    console.log(error);
});
// fetch('http://localhost:8080')
// .then(response=>response.json())
// .then(data=>console.log(data.out))

