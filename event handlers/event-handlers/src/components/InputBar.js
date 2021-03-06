import React from 'react';

////////////////////////////////////////////////////////////////////////////

// CONTROLLED ELEMENTS FLOW:
// user types in input
// callback gets invoked
// we call setState with the new value
// component renders again
// input is told what value it is - the value comes from state

////////////////////////////////////////////////////////////////////////////

// state needed to handle user input -> class
class InputBar extends React.Component {

    state = {userInput: ''};

    // required!!
    // otherwise input field will be read-only
    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    };

    handleSubmit = (event) => {
        console.log(this.state.userInput);
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={this.handleChange}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default InputBar;

// onSubmit={this.onFormSubmit()} ->
// onFormSubmit will be called every time the component is rendered