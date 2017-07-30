import React, { Component } from 'react';
import { Header, Footer} from './components'
import { GameBoard, ScoreBoard } from './containers'
import './css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    this.setState({
      loading: false
    })
  }

  render() {

    return (
      <div className="App">
        <Header/>
        <ScoreBoard
          loading={this.state.loading}
        />
        <GameBoard/>
        <Footer/>
      </div>
    );
  }
}

export default App;
