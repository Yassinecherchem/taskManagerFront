import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './Lists.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Lists() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    
        <Grid container spacing={2}>
        <Grid item xs={4}>
            <Item>TODO</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>IN PROGRESS</Item>
        </Grid>
        <Grid item xs={4}>
            <Item>DONE</Item>
        </Grid>
        </Grid>

    </Box>
  );
}

export default Lists;
