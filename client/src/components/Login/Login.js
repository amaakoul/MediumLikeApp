import React from 'react';
import {FormGroup,  FormControl, ControlLabel } from "react-bootstrap";
import API from '../../utils/API';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Button , TextField  } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom'

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if(this.state.email.length === 0){
            return;
        }
        if(this.state.password.length === 0){
            return;
        }
        API.login(this.state.email, this.state.password).then(function(data){
            localStorage.setItem('token', data.data.token);
            window.location = "/dashboard"
        },function(error){
            console.log(error);
            return;
        })
    }    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    redirectToTarget = () => {
        this.props.history.push(`/signup`)
      }
    render(){
        const styles = {
            card: {
              maxWidth: 345,
              margin: 'auto',
              padding: 40,
            },
            media: {
              // ⚠️ object-fit is not supported by IE 11.
              objectFit: 'cover',
            },
          };
        return(
            <Card style={styles.card} className="loginCard">
                <div className="Login">
                    <FormGroup controlId="email" bsSize="large">
                    <TextField
                    id="email" 
                    type="email" 
                    label="Email"
                    margin="normal" autoFocus
                    value={this.state.email} onChange={this.handleChange}
                    />
                    
                    <TextField
                    id="password" 
                    type="password" 
                    label="Password"
                    margin="normal" autoFocus
                    value={this.state.password} onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="password" bssize="large">
                    </FormGroup> 
                    <Button variant="contained" color="primary" 
                    onClick={this.send}
                    block="true"
                    bssize="large"
                    type="submit"
                    >
                    Connexion
                    </Button>
                </div>
                {/* <Route exact path ="/signup" component={Signup}/> */}
                
                <Button variant="contained" color="primary" onClick={this.redirectToTarget} className="">Signup</Button>
            </Card>

        )
    }
}