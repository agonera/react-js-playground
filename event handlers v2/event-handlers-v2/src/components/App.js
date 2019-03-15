import React from 'react';
import InputBar from './InputBar';

class App extends React.Component {

    // InputBar: hey, an event occured, deal with it
    // so here's a callback function:

    onInputSubmit(userInput) {
        // and in here we can do with the user input whatever we want:
        console.log(userInput);
    }

    // now take that method and pass it down as a prop
    // so we run it every time we submit an input:

    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <InputBar whenUserSubmits={this.onInputSubmit}/>
            </div>
        );
    }
}

export default App;