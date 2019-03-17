import React from 'react';

////////////////////////////////////////////////////////////////////////////

// CONTROLLED ELEMENTS FLOW:
// user types in input
// callback gets invoked
// we call setState with the new value
// component renders again
// input is told what value it is - the value comes from state

////////////////////////////////////////////////////////////////////////////

class InputBar extends React.Component {

    state = {userInput: ''};

    // <input onChange={this.onInputChange} /> - required!!
    // otherwise input field will be read-only
    onInputChange = (event) => {
        this.setState({userInput: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault(); // prevent from refreshing the page automatically after submitting a form

        // console.log(this.state.userInput); - instead of this...
        // we want to call onInputSubmit from App:
        this.props.whenUserSubmits(this.state.userInput);

    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={this.onInputChange}
                    />
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default InputBar;

// onSubmit={this.onFormSubmit()} ->
// onFormSubmit will be called every time the component is rendered