import React, { Component } from 'react'
import './App.css';
import Chart from './components/Chart'
import io from 'socket.io-client'

const socket = io('localhost:3003')

class App extends Component {

  render () {
    return (
      <Chart />
    )
  }
}

export default App;
