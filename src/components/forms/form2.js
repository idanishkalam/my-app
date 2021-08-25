import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Select, MenuItem} from '@material-ui/core';

function form2(){
    return(
        <div className="form2">
           <Typography gutterBottom variant="h3" align="center" >
        WORK-PROGRESS
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 650, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
          <Typography gutterBottom variant="h5">
              Fill Out Details
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Description about Work in Progress
            </Typography>
            <form>
            <Grid container spacing={1}>
            <Grid xs={12} item>
            <TextField fullWidth required
                    id="outlined-select-currency"
                    select
                    label="Isolated Line No."
                    variant="outlined"
                  >
                    <MenuItem key="1" value="1">
                      BSP/SS/56/LINE NO-2
                    </MenuItem>
                    <MenuItem key="2" value="2">
                      BSP/SS/56/LINE NO-1
                    </MenuItem>
                    <MenuItem key="3" value="3">
                      BSP/SS/56/LINE NO-3
                    </MenuItem>
                  </TextField>
                  </Grid>
                  <Grid xs={12} item>
            <TextField fullWidth required
                    id="outlined-select-currency"
                    select
                    label="Isuued Token No."
                    variant="outlined"
                  >
                    <MenuItem key="1" value="1">
                      BSP/SS/56/LINE NO-2
                    </MenuItem>
                    <MenuItem key="2" value="2">
                      BSP/SS/56/LINE NO-1
                    </MenuItem>
                    <MenuItem key="3" value="3">
                      BSP/SS/56/LINE NO-3
                    </MenuItem>
                  </TextField>
                  </Grid>
                  <Grid item xs={12}>
                  <TextField placeholder="TOKEN TAKEN BY" label="Token taken by" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField placeholder="Section" label="Section" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField placeholder="LOCO NO." label="Loco No." variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="STAFF MOBILE NO." label="Staff Mobile No." variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="SUPERVISOR NO." label="Supervisor Mobile" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <TextField type="datetime-local" placeholder="DATE" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={6}>
                   <Button variant="contained" color="secondary">Send OTP</Button>
                   </Grid>
                <Grid item xs={6}>
                   <Button variant="contained" color="secondary">Re-Send OTP</Button>
                </Grid>
                <Grid item xs={12}>
                <TextField type="number" placeholder="Staff OTP" label="Staff OTP" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <TextField type="number" placeholder="SUPERVISOR OTP" label="Supervisor OTP" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Verify & Accept</Button>
                  </Grid>
                </Grid>
               
            </form>
          </CardContent>
          </Card>
          </Grid>
        </div>
    )
}

export default form2;