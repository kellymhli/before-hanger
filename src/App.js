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
    selectedRes: undefined,
  }

  // Select random index from resulting array of restaurants
  getRandInt = () => {
    if (this.state.res.total === 0) return 0;
    const randomInt = Math.round(Math.random() * this.state.res.total);
    if (randomInt >= 50 || randomInt >= this.state.res.total) {
      return this.getRandInt();
    } else {
      return randomInt;
    }
  }

  getOptions = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const radius = parseInt(e.target.elements.radius.value);
    const cuisines = e.target.elements.cuisine;
    const prices = e.target.elements.price;
    const otherCuisine = e.target.elements.other.value.replace(/ /g, "");

    var i;
    let checkedCuisines = [];
    if (otherCuisine) checkedCuisines.push(otherCuisine);
    // Store user entered option to cuisines array
    for (i = 0; i < cuisines.length; i++) {
      // Get all the cuisines that have been checked and add to array
      if (cuisines[i].checked) {
        checkedCuisines.push(cuisines[i].value);
      }
    }

    let checkedPrices = [];
    for (i = 0; i < prices.length; i++) {
      // Get all user selected prices and add to array
      if (prices[i].checked) {
        checkedPrices.push(prices[i].value);
      }
    }
    const categories = checkedCuisines.join(',');
    const price = checkedPrices.join(',');

    // Update selected values in state and fetch results from Yelp API
    // https://medium.com/@chaoyue_zhao/how-to-make-axios-api-calls-with-yelp-fusion-inside-react-js-10755d8485c5
    this.setState({location: city, price: price, categories: categories, radius: radius*1609}, () => {
      console.log(this.state);
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${ENDPOINT}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        },
        params: {
          location: `${this.state.location}`,
          price: `${this.state.price}`,
          radius: `${this.state.radius}`,
          categories: `${this.state.categories}`,
          limit: 50,
          open_now: true,
          locale: 'en_US',
        }
      })
      .then((res) => {
        // Randomly select restaurant from resulting list
        this.setState({res: res.data}, () => {
          const int = this.getRandInt();
          if (int === 0) {
            console.log("No results found.")
          } else {
            this.setState({selectedRes: res.data.businesses[int]}, () => {
              console.log(this.state.res, this.state.selectedRes);
            });
          }
        });
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
        <Form getOptions={ this.getOptions } />
        {this.state.selectedRes ? <Restaurant
          id={this.state.selectedRes.id}
          name={this.state.selectedRes.name}
          imgUrl={this.state.selectedRes.image_url}
          url={this.state.selectedRes.url}
          reviewCount={this.state.selectedRes.review_count}
          price={this.state.selectedRes.price}
          rating={this.state.selectedRes.rating}
          lat={this.state.selectedRes.coordinates.latitude}
          long={this.state.selectedRes.coordinates.longitude}
          phone={this.state.selectedRes.phone}
          displayAddress={this.state.selectedRes.location.display_address}
          />:null}
      </div>
    );
  };

}

export default App;
