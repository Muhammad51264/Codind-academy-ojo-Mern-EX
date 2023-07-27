// fetch("http://localhost:3000/info",{
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({id:1,name:"ali"})});


const data = {
    name: 'Mohammad',
    email: 'Mohammadexample.com'
  };
  
  fetch('http://localhost:3000/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })