// import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return (
        <div>
            some text
        </div>
    )
};

// take the react component and show on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);