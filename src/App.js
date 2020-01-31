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
    categories: undefined,
    price: undefined,
    radius: 2414,  //Default to 1.5mi in meters
    res: undefined,
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
    const categories = checkedCuisines.join(',');
    const price = e.target.elements.price.value;
    const city = e.target.elements.city.value;
    const radius = parseInt(e.target.elements.radius.value);

    // Update selected values in state and fetch results from Yelp API
    // https://medium.com/@chaoyue_zhao/how-to-make-axios-api-calls-with-yelp-fusion-inside-react-js-10755d8485c5
    this.setState({location: city, price: price, categories: categories, radius: radius*1609}, () => {
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${ENDPOINT}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        },
        params: {
          location: `${this.state.location}`,
          price: `${this.state.price}`,
          location: `${this.state.location}`,
          radius: `${this.state.radius}`,
          limit: 50,
          open_now: true,
          locale: 'en_US',
        }
      })
      .then((res) => {
        this.setState({res: res.data.businesses});
        console.log(this.state.res);
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
