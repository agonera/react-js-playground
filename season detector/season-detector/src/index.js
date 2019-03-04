import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {

    constructor(props) {
        // get the functionality from React.Component
        super(props);
        // initialize state
        this.state = {lat: null, lon: null, errorMessage: ''};
    }

    // or instead of the constructor:
    // == state = {lat: null, errorMessage: ''};

    // lifecycle methods:
    componentDidMount() {
        // get the location
        window.navigator.geolocation.getCurrentPosition(
            // updating the state object
            position => this.setState(
                {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }),
            // handle errors
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component was updated - it rerendered.');
    }

    // separate conditionals from render()
    // we want only one return statement in render()
    renderContent() {
        // we just return some JSX
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        } else if (this.state.lat && !this.state.errorMessage) {
            // take state and pass it as a prop to a child
            return <SeasonDisplay
                lat={this.state.lat}
                lon={this.state.lon}
            />
        } else {
            return <Loader
                message="Please accept location request"
            />
        }
    }

    // obligatory to define a render method
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
