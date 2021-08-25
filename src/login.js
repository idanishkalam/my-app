import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import './login.css'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  
  const classes = useStyles();
  return (
    <div className="App-header">
      <div className="App-body">
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography style={{color:'black',fontFamily: 'Comfortaa',fontSize:35,fontWeight:10}} component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <div style={{justifyContent:"center",display:"flex",flexDirection:"column"}}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            padding="10"
            
            id="email"
            
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            
            
          </Grid>
        </form>
      </div>
    </Container>
      </div>
    </div>
    
  );
}