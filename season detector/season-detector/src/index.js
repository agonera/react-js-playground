import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {

        // get the functionality from React.Component
        super(props);
        // initialize state
        this.state = {lat: null, errorMessage: ''};

        // get the location
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // updating the state object
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    // obligatory to define a render method
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>
        } else if (this.state.lat && !this.state.errorMessage) {
            return <div> Latitude: {this.state.lat}</div>
        } else {
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
