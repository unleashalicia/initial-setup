import React, {Component} from 'react';
import axios from 'axios';

class GetData extends Component {

    componentDidMount(){
        this.getData();
        this.getBetterData();
    }

    async getData(){
        const response = await axios.get('/api/get-stuff');

        console.log('Response: ', response);
    }

    async getBetterData(){
        const response = await axios.get('/api/better-stuff');

        console.log('Better Stuff: ', response);
    }

    render(){
        return(
            <div>
                <h1>This is get data</h1>
            </div>
        );
    }
}

export default GetData;