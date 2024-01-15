import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Draggable from 'react-draggable';

const Task = ({Link}) => {
    const [Tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch('http://localhost:8080/api/v1/task');
                const data = await response.json();
                console.log(data); setTasks(data);
            }catch(error){
                console.error('error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    /*const deleteTask = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this Task?');
        if(confirmDelete){
            fetch(`http://localhost:8080/api/v1/task/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json',
                },
                })
                .then((res)=>{
                    if(!res.ok){
                        throw new Error("Could not delete task");
                    }
                    alert("Deleted Successfully!");
                    console.log("Deleted")})
                    .catch(error =>{
                        console.error('Error:', error)
                    });
            } 
    }*/

    return (
        <>
            <Draggable nodeRef={nodeRef}>

                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      {Task.title}
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
            </Draggable>
        </>
    );
};

export default Task;