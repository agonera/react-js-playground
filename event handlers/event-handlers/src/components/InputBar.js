import React from 'react';

// state needed to handle user input -> class

class InputBar extends React.Component {

    state = {userInput: ''};

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
                    <input type="text" value={this.state.userInput} onChange={this.handleChange}/>
                    <input type="submit" value="+"/>
                </form>
            </div>
        );
    }
}

export default InputBar;