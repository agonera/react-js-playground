import React from 'react';


class InputBar extends React.Component {
    state = { userInput: '' };

    onInputChange = (event) => {
        this.setState({ userInput: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
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
