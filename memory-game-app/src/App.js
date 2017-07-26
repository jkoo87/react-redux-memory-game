import React, { Component } from 'react';
import { Header, Footer} from './components'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="gameBoardBackground">

        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
