import { useEffect,useState } from 'react'

const Task = () => {
    const [newTask,setNewTask]=useState("");
    const [tasks ,setTasks]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:8080')
    .then(response=>response.json())
    .then(data=>{
        setTasks(data.out)
    })
    
  },[])
  return (
    <>
           <div className="container d-flex flex-column border gap-1 mt-4 rounded align-items-center">
        <h4 className='text-center'>To-Do List</h4>
        <form  action="" onSubmit={(e)=>{

            e.preventDefault()
            let taskObj={
                task : newTask
            }
            fetch('http://localhost:8080', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(taskObj)})
                .then(response => response.json())
                .then(data => {
                    setTasks(JSON.parse(data.out));
             
                })
                .catch(error => {
                    console.log(error);
                });

                        }}>
        <input  type="text" name="task" id="" style={{width:"260px"}} onChange={(e)=>{setNewTask(e.target.value)}}/>
        <button type='submit'>Add</button>
        </form>
        {tasks.map((item,id)=>{
            return(
                <div className='task__container d-flex justify-content-between border w-50 rounded p-3' key={id}>
                    <div className='' >{item.task}</div>
<div className="buttons">
<button className='btn btn-info mx-2' onClick={() => {
  let updatedValue = prompt("Update:");
  fetch('http://localhost:8080', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task: item.task, edited: updatedValue })
  })
    .then(response => response.json())
    .then(data => {
      const updatedTasks = data.out;
      setTasks(updatedTasks);
    })
    .catch(error => {
      console.log(error);
    });
}}>Edit</button>


<button className='btn btn-danger' onClick={()=>{
                        fetch('http://localhost:8080', {
                            method: 'DELETE',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(item)
                          })
                            .then(response => response.json())
                            .then(data => {
                            setTasks(JSON.parse(data.out));

                              console.log(data.out);
                            })
                            .catch(error => {
                              console.log(error);
                          });
                    } 

                    }>Delete</button>
</div>

                </div>

            )
        })}




      </div> 
    </>
  )
}

export default Task
