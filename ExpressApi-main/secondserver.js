fetch("http://localhost:3000/users",{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id:1,name:"ali"})});

// fetch("http://localhost:3000/users/1",{
//     method: 'DELETE',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({id:1,name:"ali"})});

// fetch("http://localhost:3000/users/0",{
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({name:"ali"})});