import React, { Component } from 'react';
import { Header, Footer} from './components'
import { GameBoard, ScoreBoard } from './containers'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ScoreBoard/>
        <GameBoard/>
        <Footer/>
      </div>
    );
  }
}

export default App;
