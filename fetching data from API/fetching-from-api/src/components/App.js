import React from 'react';
import unsplash from '../api/unsplash';
import InputBar from './InputBar';
import InputList from './InputList';


////////////////////////////////////////////////////////////////////////////

// MAKING api REQUEST
// App component renders itself one time with no images
// onInputSubmit method is called
// request made to unspash
// ... waiting ...
// request completed
// set image on state of App component
// App renders again and shows images

////////////////////////////////////////////////////////////////////////////

class App extends React.Component {

    state = { images: [] };

    /*      onInputSubmit(userInput) {
            // make a get request:
            axios // arguments: // address we want to make a get req to, object with options that customize the req
                .get('https://api.unsplash.com/search/photos', {
                    params: {query: userInput},
                    headers: {Authorization: 'Client-ID YOUR-ACCESS-KEY'}
                }) // get returns a promise object
                // if get request is successfull, function in 'then' is called:
                .then((response) => {
                    console.log(response.data.results);
                });
        }
    */

    // alternate version:
    onInputSubmit = async (userInput) => {
        // make a get request:
        const response = await unsplash
        // arguments: address we want to make a get req to, object with options that customize the req
            .get('/search/photos', {
                params: { query: userInput },
            }); // get returns a promise object

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <InputBar whenUserSubmits={this.onInputSubmit}/>
                <p>found: {this.state.images.length} images</p>
                <InputList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
