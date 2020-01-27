import React from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Restaurant from './components/Restaurant';

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
