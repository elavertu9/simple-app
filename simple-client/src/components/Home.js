import React, {Component} from 'react';
import publicIp from 'public-ip';

const getClientIp = async () => await publicIp.v4({
  fallbackUrls: [ "https://ifconfig.co/ip" ]
});

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            connectionStatus: 'Not connected'
        }
    }

    

    componentDidMount() {
        //fetch("http://127.0.0.1:5000/")
        //fetch("http://simple-server.default.svc.cluster.local:5000")
        //fetch("http://cluster-ip-service.default.svc.local:5001")
        fetch(`http://127.0.0.1:5001/`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({connectionStatus: result});
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
    }

    render() {
        return(
            <h1>{this.state.connectionStatus}</h1>
        );
    }
}