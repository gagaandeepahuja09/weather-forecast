import React, { Component } from 'react';
import SearchBar from './containers/SearchBar/SearchBar';
import WeatherList from './containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
