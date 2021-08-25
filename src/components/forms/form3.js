import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Select, MenuItem} from '@material-ui/core';

function form3(){
    return(
      <div>
          <Typography gutterBottom variant="h3" align="center">
           ISOLATION
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
                  <Grid item xs={12}>
                    <TextField placeholder="NAME" label="Isolation done By" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="number" placeholder="MOBILE NO." label="Mobile" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={6}>
                   <Button variant="contained" color="secondary">Send OTP</Button>
                   </Grid>
                <Grid item xs={6}>
                   <Button variant="contained" color="secondary">Re-Send OTP</Button>
                </Grid>
                <Grid item xs={10}>
                    <TextField type="number" placeholder="OTP" label="OTP" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={2}>
                  <Button variant="contained" color="primary">Verify OTP</Button>
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
                <TextField type="datetime-local" placeholder="DATE" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={6}>
                <TextField type="number" placeholder="Staff Number" label="Staff No." variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={6}>
                <TextField type="number" placeholder="SUPERVISOR NO." label="Supervisor No." variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary" fullWidth>Send SMS</Button>
                  </Grid><Grid item xs={4}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Update Dashboard</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button type="reset" variant="contained" color="primary" fullWidth>reset</Button>
                  </Grid>
              </Grid>
              </form>
              </CardContent>
              </Card>
              </Grid>
      </div>
    );
}

export default form3;