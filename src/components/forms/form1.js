import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Select, MenuItem } from '@material-ui/core';

function form1() {


    return (
      <div className="App">
        <Typography gutterBottom variant="h3" align="center">
          PRELIMINARY-WORK
        </Typography>
        <Grid>
          <Card style={{ maxWidth: 650, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Fill Out
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Description about Fields
              </Typography>
              <form>
                <Grid container spacing={1}>
                  <Grid xs={12} item>
                    <TextField fullWidth required
                      id="outlined-select-currency"
                      select
                      label="Line No."
                      helperText="Please select your Line No."
                      variant="outlined"
                    >
                      <MenuItem key="1" value="1">
                        BSP/SS/56/LINE NO-2
                      </MenuItem>
                      <MenuItem key="2" value="2">
                        BSP/SS/56/LINE NO-1
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid xs={12} item>
                    <TextField fullWidth required
                      id="outlined-select-currency"
                      select
                      label="Loco No."
                      helperText="Please select your Loco No."
                      variant="outlined"
                    >
                      <MenuItem key="1" value="1">
                        24531
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth required
                      id="outlined-select-currency"
                      select
                      label="Token No."
                      helperText="Please select your Token No."
                      variant="outlined"
                    >
                      <MenuItem key="1" value="1">
  
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth required
                      id="outlined-select-currency"
                      select
                      label="Section"
                      helperText="Please select section"
                      variant="outlined"
                    >
                      <MenuItem key="1" value="1">
                        D&D
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField placeholder="STAFF NAME" label="Staff Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="number" placeholder="MOBILE" label="Mobile No." variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField placeholder="BOOKING SUPERVISORS" label="Booking Supervisor" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="number" placeholder="MOBILE" label="Mobile No." variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Save</Button>
                  </Grid>
  
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
  
  export default form1;