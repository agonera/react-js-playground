import React from 'react';
import ReactDOM from 'react-dom';


/*  HTML -> JSX
    class -> className
    style="background-color: grey" -> style={{ backgroundColor: 'grey' }}
    for -> htmlFor
*/

function someText() {
    return "Some text";
}

/* refenrencing a JS variable: {buttonText} */

const App = () => {
    const buttonText = "Submit";
    const style = {backgroundColor: 'grey', color: 'white'};
    const labelText = "Enter name: ";
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input type="text" id="name"/>
            <button style={style}>{buttonText}</button>
            <p>{someText()}</p>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));