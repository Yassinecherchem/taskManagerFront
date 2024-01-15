import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Draggable from "react-draggable";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRef } from "react";
import axios from "axios";

import dayjs from "dayjs";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme } from "@mui/material/styles";
import advancedFormat from "dayjs/plugin/advancedFormat";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid none",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const InProgressTask = () => {
  const [InProgressTasks, setInProgressTasks] = useState([]);
  const [status, setStatus] = useState("INPROGRESS");
  const [title, setTitle] = useState(InProgressTasks.title);
  const [description, setDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(dayjs(new Date()));
  const nodeRef = useRef(null);

  const handleUpdateModalOpen = (InProgressTask) => {
    setTitle(InProgressTask.title);
    setDescription(InProgressTask.description);
    setOpenModal(true);
    fetchData();
  };

  const handleUpdateModalClose = () => {
    setOpenModal(false);
  };

  const handleDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).format("YYYY-MM-DD");
    setDate(formattedDate);
  };

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/task/inprogress/nosec");
      const data = await response.json();
      setInProgressTasks(data);
    } catch (error) {
      console.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateTask = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/task/nosec/${id}`, {
        title,
        date,
        description,
        taskStatus: status,
        reminder: false, // Adjust as needed
      });

      console.log("Task added:", response.data);
      if(response.ok){
        console.log("Task added:", response.data);
        fetchData();
        handleUpdateModalClose();
      }
      handleUpdateModalClose();
      const responseNoSec = await axios.get('http://localhost:8080/api/v1/task/nosec');
    const updatedTasks = responseNoSec.data;

    // Update the state with the updated data
    setInProgressTasks(updatedTasks);
      fetchData(); // Refetch data after updating a task
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/task/nosec/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Task deleted successfully");
        fetchData(); // Refetch data after deleting a task
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <>
      <Item>
        <div style={{ fontWeight: "bold" }}>
          INPROGRESS
        </div>
        {InProgressTasks.map((InProgressTask) => (
            <div ref={nodeRef}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  {InProgressTask.title}
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Modal
                      open={openModal}
                      onClose={handleUpdateModalClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Update Task
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
                              value={'INPROGRESS'}
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
                              onClick={() => handleUpdateTask(InProgressTask.id)}
                            >
                              update
                            </Button>
                          </form>
                        </Typography>
                      </Box>
                    </Modal>
                    <EditIcon fontSize="smaller" onClick={() => handleUpdateModalOpen(InProgressTask)} />
                    <DeleteIcon fontSize="smaller" onClick={() => handleDelete(InProgressTask.id)} />
                  </div>
                </Grid>
              </Grid>
            </div>
        ))}
      </Item>
    </>
  );
};

export default InProgressTask;