import React from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Restaurant from './components/Restaurant';

 const API_KEY = process.env.REACT_APP_API_KEY;
 const ENDPOINT = 'https://api.yelp.com/v3/businesses/search';

class App extends React.Component {

  state = {
    term: undefined,
    location: undefined,
    latitude: undefined,
    longitude: undefined,
    radius: 10000,
    categories: undefined,
    locale: 'en_US',
    limit: 50,
    price: undefined,
    open_now: true,
  }

  getOptions = async (e) => {
    e.preventDefault();

    // Get all the cuisines that have been checked and add to array
    const cuisines = e.target.elements.cuisine;
    var i;
    let checkedCuisines = [];
    for (i = 0; i < cuisines.length; i++) {
      if (cuisines[i].checked) {
        checkedCuisines.push(cuisines[i].value);
      }
    }
    const cats = checkedCuisines.join(',');
    const p = e.target.elements.price.value;
    const city = e.target.elements.city.value;

    // Update selected values in state and fetch results from Yelp API
    this.setState({location: city, price: p, categories: cats}, () => {
      // https://medium.com/@chaoyue_zhao/how-to-make-axios-api-calls-with-yelp-fusion-inside-react-js-10755d8485c5
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        },
        params: {
          location: `${this.state.location}`,
          price: `${this.state.price}`,
          limit: 50,
          open_now: true,
        }
      })
      .then((res) => {
        console.log(res.data.businesses);
      })
      .catch((err) => {
        console.log('error');
      })
    });
  }

  render() {
    return (
      <div>
        <Title />
        <Form getOptions={ this.getOptions }/>
        <Restaurant />
      </div>
    );
  };

}

export default App;
