import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Select, MenuItem} from '@material-ui/core';

function form4(){
    return(
      <div>
          <Typography gutterBottom variant="h3" align="center">
           OHE NORMALIZATION
        </Typography>
        <Grid>
          <Card style={{ maxWidth: 650, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Fill Details
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
                    <TextField placeholder="NAME" label="OHE Normal done By" variant="outlined" fullWidth required />
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
                <Grid item xs={8}>
                <TextField type="number" placeholder="Mobile OTP" label="OTP" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={4}>
                   <Button variant="contained" color="primary">VERIFY OTP & ACCEPT</Button>
                </Grid>
                <Grid item xs={12}>
                <TextField type="datetime-local" placeholder="DATE" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                   <Button type="submit" variant="contained" color="secondary" fullWidth>UPDATE Dashboard</Button>
                </Grid>
                  </Grid>
              </form>
              </CardContent>
              </Card>
              </Grid>
              </div>
              )
              }
export default form4;