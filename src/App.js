import React from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Restaurant from './components/Restaurant';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {

  getOptions = (e) => {
    e.preventDefault();
    const values = e.target;
    console.log(values);
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
