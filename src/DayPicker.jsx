import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DayContainer from './DayContainer'

class DayPicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: this.props.date,
      isOpen: false
    }
  }

  handleSelect = (date) => {
    this.setState({ date })
    // this.props.onSelect()
  }

  handlePrev = () => {
    const oldDate = new Date(this.state.date)
    const newDate = oldDate.setMonth((oldDate.getMonth() - 1) % 12)
    this.setState({ date: newDate })
  }

  handleNext = () => {
    const oldDate = new Date(this.state.date)
    const newDate = oldDate.setMonth((oldDate.getMonth() + 1) % 12)

    this.setState({ date: newDate })
  }

  handleChange = () => {
    return null
  }

  render() {
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December']
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const month = new Date(this.state.date).getMonth()
    const year = new Date(this.state.date).getFullYear()
    const firstDate = `${monthName[month]} ${1} ${year}`
    const firstDay = new Date(firstDate).toDateString().substring(0, 3)
    const dayNo = dayName.indexOf(firstDay)
    const days = new Date(year, month + 1, 0).getDate()

    return (
      <div className="day-picker">
        <input
          type="text"
          value={moment(this.state.date).format('MM / DD / YYYY')}
          onChange={this.handleChange}
        />
        <div>
          <div>
            <button className="button-prev" onClick={this.handlePrev} />
            <span>{monthName[month]} {year}</span>
            <button className="button-next" onClick={this.handleNext} />
          </div>
          <DayContainer
            dayNo={dayNo}
            maxDay={days}
            month={month}
            year={year}
            handleSelect={this.handleSelect}
            isOpen={this.state.isOpen}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}
DayPicker.defaultProps = {
  onSelect: () => {
    console.log('success!')
  }
}

DayPicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onSelect: PropTypes.func
}

export default DayPicker