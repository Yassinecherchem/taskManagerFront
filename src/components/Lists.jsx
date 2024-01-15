import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { useRef } from 'react';
import './Lists.css';
import TodoTask from './Task/TodoTask.jsx';
import InProgressTask from './Task/InProgressTask.jsx';
import DoneTask from './Task/DoneTask.jsx';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Lists() {
  const nodeRef = useRef(null);
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={4}> 
            <TodoTask/>
        </Grid>
        <Grid item xs={4}>
            <InProgressTask/>
        </Grid>
        <Grid item xs={4}>
            <DoneTask/>
        </Grid>
        </Grid>

    </Box>
  );
}

export default Lists;
