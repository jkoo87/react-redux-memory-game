import React, { Component } from 'react';
import { Header, Footer} from './components'
import { GameBoard, ScoreBoard } from './containers'
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {isLoading: true}
  }
  componentDidMount(){
    this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ScoreBoard
          isLoading={this.state.isLoading}
        />
        <GameBoard/>
        <Footer/>
      </div>
    );
  }
}

export default App;
