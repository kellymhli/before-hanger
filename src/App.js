import React from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Restaurant from './components/Restaurant';

const API_KEY = process.env.REACT_APP_API_KEY;
const ENDPOINT = 'https://api.yelp.com/v3/businesses/search'
const HEADERS: {'Authorization': `bearer ${API_KEY}`}

class App extends React.Component {

  state = {
    'term': undefined,
    'location': undefined,
    'latitude': undefined,
    'longitude': undefined,
    'radius': 10000,
    'categories': undefined,
    'locale': 'en_US',
    'limit': 50,
    'price': undefined,
    'open_now': true,
  }

  getOptions = async (e) => {
    e.preventDefault();
    const values = e.target.elements;
    console.log(values);
    const api_call = await fetch(`${ENDPOINT}`);
    console.log(api_call);
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
