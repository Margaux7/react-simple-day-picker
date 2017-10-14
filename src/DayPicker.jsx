import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DayContainer from './DayContainer'

class DayPicker extends React.Component {
  constructor(props) {
    super()

    state = {
      date: this.props.date,
      isOpen: false
    }
  }

  handleSelect = (date) => {
    this.setState({ date : date })
    this.props.onSelect()
  }
  
  render() {
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December']
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const month = this.props.date.getMonth()
    const year = this.props.date.getFullYear()
    const firstDate = monthName[month] + '' + 1 + '' + year
    const firstDay = new Date(firstDate).toDateString().substring(0, 3)
    const dayNo = dayName.indexOf(firstDay)
    const days = new Date(year, month + 1, 0).getDate()

    return (
      <div className="day-picker">
        <input type="text" value={moment(this.state.date).format(MM/DD/YYYY)}/>
        sdgfhj
        <div>
          <div>
            {monthName[month]} {year}
          </div>
          <DayContainer 
            dayNo={dayNo}
            maxDay={days} 
            month={month}
            year={year}
            {...props} />
        </div>
      </div>
    )
  }
}

DayPicker.propTypes = {
  date: PropTypes.date.isRequired,
  onSelect: PropTypes.func
}

export default DayPicker