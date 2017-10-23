# react-simple-day-picker

A simple and reusable Daypicker component for React 

![](./docsrc/demo.gif)

## Installation
react-simple-day-picker is available as an npm package.

```bash
npm install react-simple-day-picker --save
```
or use Yarn
```bash
yarn add react-simple-day-picker
```

## demo 
[https://margaux7.github.io/react-simple-day-picker-demo/](https://margaux7.github.io/react-simple-day-picker-demo/)

## example
```js
import React from 'react'
import DayPicker from 'react-simple-day-picker'

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
      <div>
        <DayPicker
          date={this.state.date}
          onSelect={this.handleSelect}
        />
      </div>
    )
  }
}
```

## Dependencies
[react](https://reactjs.org/)    
[moment.js](https://momentjs.com/)

## API
| Name | Type | IsRequired | Default | Descripition |
| :--: | :--: | :--------: | :-----: | :---------- |
| date | `Date` | `true` | / | Represents the selected date by the component. |
|onSelect| `function` | `true` | / | Callback when the date is selected. The callback receives the selected `Date` object as only parameter, the object can be changed to any format in the callback. |
| language | `string` | `false` | `'en'` | The language setting of the day picker, support `'en'` -> English and `'zh'` -> Chinese. |
| customClassName | `string` | `false` | `''` | The custom className of day picker, use it and set custom style. | 

## License
MIT
