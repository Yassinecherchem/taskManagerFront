import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { useRef } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Lists.css'

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
            <Item >
              <div style={{ fontWeight: 'bold'}}>
              TODO
              </div>
              
              <Draggable nodeRef={nodeRef}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      Task
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>
              <Draggable nodeRef={nodeRef}> 
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      Task
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>
              <Draggable nodeRef={nodeRef}>
                <Grid container spacing={2}>
                    <Grid  item xs={8}>
                      Task 
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>
              <Draggable nodeRef={nodeRef}>
                <div style={{textAlign:'left'}} ref={nodeRef}>
                  TODO2 <br />
                </div>
                
              </Draggable>
              <Draggable nodeRef={nodeRef}>
                <div style={{textAlign:'left'}} ref={nodeRef}>
                  TODO3 <br />
                </div>
                
              </Draggable>
              <Draggable nodeRef={nodeRef}>
                <div style={{textAlign:'left'}} ref={nodeRef}>
                  TODO4 <br />
                </div>
                
              </Draggable>
              <Draggable nodeRef={nodeRef}>
                <div style={{textAlign:'left'}} ref={nodeRef}>
                  TODO5 <br />
                </div>
                
              </Draggable>
            </Item>
        </Grid>
        <Grid item xs={4}>
            <Item>
              <div style={{ fontWeight: 'bold'}}>IN PROGRESS</div>
              <Draggable nodeRef={nodeRef}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      Task
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>

              <Draggable nodeRef={nodeRef}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      Task
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>

              <Draggable nodeRef={nodeRef}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      Task
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>

              <Draggable nodeRef={nodeRef}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      Task
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>
            </Item>
        </Grid>
        <Grid item xs={4}>
            <Item>
            <div style={{ fontWeight: 'bold'}}>Done</div>

            <Draggable nodeRef={nodeRef}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      Task
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>

              <Draggable nodeRef={nodeRef}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      Task
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>

              <Draggable nodeRef={nodeRef}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      Task
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>

              <Draggable nodeRef={nodeRef}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                      Task
                    </Grid>
                    <Grid  item xs={4}>
                      <div>
                        <EditIcon fontSize="smaller"  />
                        <DeleteIcon fontSize="smaller"/>
                      </div>
                    </Grid>
                </Grid>
                
              </Draggable>
            </Item>
        </Grid>
        </Grid>

    </Box>
  );
}

export default Lists;
