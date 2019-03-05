import React from 'react';

// user types in input
// callback gets invoked
// we call setState with the new value
// component rerenders
// input is told what value it is (coming from state)
// ^ CONTROLLED ELEMENT

class InputBar extends React.Component {
    state = {userInput: ''};

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>My list</label>
                        <input
                            type="text"
                            value={this.state.userInput}
                            onChange={e => this.setState(
                                {userInput: e.target.value}
                            )}
                        />
                    </div>
                </form>

            </div>
        );
    }
}

export default InputBar;

// onChange
// onClick
// onSubmit