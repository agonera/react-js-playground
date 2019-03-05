import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {

    // initialize state object
    state = {time: new Date().toLocaleTimeString()};

    componentDidMount() {
        setInterval(() => {
            // update state object
            this.setState({time: new Date().toLocaleTimeString()});
        }, 1000)
    }

    render() {
        // display the current state of the object
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}

ReactDOM.render(<Clock/>, document.querySelector('#root'));