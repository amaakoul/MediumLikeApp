import React from 'react';
import { Button } from '@material-ui/core';
import API from '../../utils/API';
import {Main} from '../NewsSection/NewsSection';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    render() {
        return(
            <div className="Dashboard">
                <h1>Dashboard</h1>
                <Button
                variant="contained" color="secondary"
                onClick={this.disconnect}
                block
                bsSize="large"
                type="submit"
                >
                Se déconnecter
                </Button>
                <Main className="news"/>

            </div>
        )
    }
}