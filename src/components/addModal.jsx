import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { createTheme } from '@mui/material/styles'
import advancedFormat from 'dayjs/plugin/advancedFormat'; 
import axios from 'axios' // Import axios

dayjs.extend(advancedFormat);

const newTheme = (theme) => createTheme({
  ...theme,
  components: {
    MuiDayCalendar: {
      styleOverrides: {
        root: {
          color: '#1565c0',
          borderRadius: 5,
          borderWidth: 2,
          borderColor: '#2196f3',
          border: '2px solid',
          backgroundColor: '#bbdefb',
        },
      },
    },
  },
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid none',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
}

function AddModal({ open, handleClose }) {
  const [task, setTask] = useState([])
  const [status, setStatus] = useState('TODO')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(dayjs(new Date()))

  const handleChange = (event) => {
    setStatus(event.target.value)
  }

  const handleDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).format('YYYY-MM-DD');
    setDate(formattedDate);
  }

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/task/nosec");
      const data = await response.json();
      setTask(data);
    } catch (error) {
      console.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddTask = async () => {
    try {
      // Make API request to add a new task
      const request = await axios.post('http://localhost:8080/api/v1/task/nosec', {
        title,
        date,
        description,
        taskStatus: status,
        reminder: false,
        userId: 1, // Adjust as needed
      })

      // Handle the response, e.g., close the modal on success
      console.log('Task added:', request.data)
      handleClose();

      const responseNoSec = await axios.get('http://localhost:8080/api/v1/task/nosec');
      const updatedTasks = responseNoSec.data;

    // Update the state with the updated data
    setTask(updatedTasks);
    fetchData();
    

      
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error adding task:', error)
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Task
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form>
            <TextField
              sx={{ margin: 2 }}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              sx={{ margin: 2 }}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              sx={{ margin: 2 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={'TODO'}>Todo</MenuItem>
              <MenuItem value={'INPROGRESS'}>In Progress</MenuItem>
              <MenuItem value={'DONE'}>Done</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="Date"
                  value={date}
                  onChange={handleDateChange}
                />
              </DemoContainer>
            </LocalizationProvider>

            <Button
              variant="contained"
              sx={{ marginLeft: '75%', marginTop: -12 }}
              onClick={handleAddTask}
            >
              Add
            </Button>
          </form>
        </Typography>
      </Box>
    </Modal>
  )
}

export default AddModal