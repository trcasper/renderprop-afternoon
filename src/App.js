import React, { Component } from 'react'
import './App.css'

import Currency from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <Currency />
      </>
    )
  }
}

export default App