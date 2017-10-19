import React from 'react'
import DayPicker from './DayPicker'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      date: new Date()
    }
  }

  handleSelect = (date) => {
    this.setState({ date })
  }

  render() {
    return (
      <DayPicker
        date={this.state.date}
        onSelect={this.handleSelect}
        language="en"
      />
    )
  }
}

export default App
