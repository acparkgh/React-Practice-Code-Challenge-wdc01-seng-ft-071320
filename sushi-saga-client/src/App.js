import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = ({
      allSushi: [],
      showFourSushi: [],
      firstSushi: 0,
      lastSushi: 4,
      emptyPlates: [],
      moneyRemaining: 100

    })
  }

  componentDidMount() {
    fetch(API)
      .then(resolution => resolution.json())
      // .then(console.log)
      .then(sushiArray => {
        let newSushiArray = sushiArray.map(eachSushi => {return {...eachSushi, eaten: false}})
        this.setState({
          allSushi: newSushiArray,
          showFourSushi: newSushiArray.slice(this.state.firstSushi, this.state.lastSushi),
          firstSushi: this.state.firstSushi + 4,
          lastSushi: this.state.lastSushi + 4,
          number: 2
        })
      })
      
  }

  nextFourSushi = () => {
    // debugger
    this.setState({
      showFourSushi: this.state.allSushi.slice(this.state.firstSushi, this.state.lastSushi),
      firstSushi: this.state.firstSushi + 4,
      lastSushi: this.state.lastSushi + 4
    })
  }

  sushiEaten = (clickedSushi) => {
    // debugger

    if(this.state.moneyRemaining >= clickedSushi.price) {
    
      this.setState({
        
        allSushi: this.state.allSushi.map((eachSushi) => {
          if(eachSushi.id === clickedSushi.id) {  
            return {...eachSushi, eaten: true}
          }
          return eachSushi
        }),

        showFourSushi: this.state.showFourSushi.map((eachSushi) => {
          if(eachSushi.id === clickedSushi.id) {
            return {...eachSushi, eaten: true}
          }
          return eachSushi
        }),

        emptyPlates: [...this.state.emptyPlates, clickedSushi.id],
        moneyRemaining: this.state.moneyRemaining - clickedSushi.price

      })
    }  
  }

  render() {
    return (
      <div className="app">
        <SushiContainer showFourSushi = {this.state.showFourSushi} 
                        nextFourSushiFunction = {this.nextFourSushi}
                        sushiEatenFunction = {this.sushiEaten}/>
        <Table emptyPlates = {this.state.emptyPlates}
               moneyRemaining = {this.state.moneyRemaining}/>
      </div>
    );
  }
}

export default App;