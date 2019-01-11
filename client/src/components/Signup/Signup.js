import React from 'react';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from '../../utils/API';
import {Card , Button , TextField  } from '@material-ui/core';

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: "",
            cpassword: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if(this.state.email.length === 0){
            return;
        }
        if(this.state.password.length === 0 || this.state.password !== this.state.cpassword){
            return;
        }
        var _send = {
            email: this.state.email,
            password: this.state.password
        }
        API.signup(_send).then(function(data){
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
        this.props.history.push(`/`)
    }
    render() {
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
            <Card style={styles.card} className="signup">
                <FormGroup controlId="email" bssize="large">
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
                    <TextField
                    id="cpassword" 
                    type="password" 
                    label="Confirm Password"
                    margin="normal" autoFocus
                    value={this.state.cpassword} onChange={this.handleChange}
                    />
                </FormGroup>
                <Button
                variant="contained"
                color="primary" 
                onClick={this.send}
                block="true"
                bsSize="large"
                type="submit"
                >
                Inscription
                </Button>
                <Button variant="contained" color="primary" onClick={this.redirectToTarget} className="">Login</Button>

            </Card>
        )
    }
}