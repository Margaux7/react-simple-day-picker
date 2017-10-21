import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DayContainer from './DayContainer'
import './style.css'

class DayPicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  showDayContainer = () => {
    this.setState({ isOpen: true })
  }

  handleSelect = (date) => {
    this.setState(() => ({
      isOpen: false
    }))
    this.props.onSelect(date)
  }

  handlePrevYear = () => {
    const newDate = new Date(this.props.date)
    newDate.setFullYear(newDate.getFullYear() - 1)
    this.props.onSelect(newDate)
  }

  handleNextYear = () => {
    const newDate = new Date(this.props.date)
    newDate.setFullYear(newDate.getFullYear() + 1)
    this.props.onSelect(newDate)
  }

  handlePrevMonth = () => {
    const newDate = new Date(this.props.date)
    newDate.setMonth(newDate.getMonth() - 1)
    this.props.onSelect(newDate)
  }

  handleNextMonth = () => {
    const newDate = new Date(this.props.date)
    newDate.setMonth(newDate.getMonth() + 1)
    this.props.onSelect(newDate)
  }

  render() {
    const monthNameEn = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December']
    const monthNameZh = ['一月', '二月', '三月', '四月', '五月', '六月',
      '七月', '八月', '九月', '十月', '十一月', '十二月']
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const month = new Date(this.props.date).getMonth()
    const year = new Date(this.props.date).getFullYear()
    const firstDate = `${monthNameEn[month]} ${1} ${year}`
    const firstDay = new Date(firstDate).toDateString().substring(0, 3)
    const dayNo = dayName.indexOf(firstDay)
    const days = new Date(year, month + 1, 0).getDate()

    return (
      <div className={
        this.props.customClassName ?
        `react-day-picker ${this.props.customClassName}` :
         'react-day-picker'}
      >
        <input
          className="picker-input"
          type="text"
          value={moment(this.props.date).format('MM / DD / YYYY')}
          onClick={this.showDayContainer}
        />
        <div className={this.state.isOpen ?
          'day-picker show-day-picker'
          : 'day-picker not-show-day-picker'}
        >
          <div className="day-picker-header">
            <button className="button-prev-year" onClick={this.handlePrevYear} />
            <button className="button-prev-month" onClick={this.handlePrevMonth} />
            <span className="month-year">
              {this.props.language === 'en' ? `${monthNameEn[month]} ${year}` :
              `${year}年 ${monthNameZh[month]}`}
            </span>
            <button className="button-next-month" onClick={this.handleNextMonth} />
            <button className="button-next-year" onClick={this.handleNextYear} />
          </div>
          <DayContainer
            dayNo={dayNo}
            maxDay={days}
            month={month}
            year={year}
            handleSelect={this.handleSelect}
            isOpen={this.state.isOpen}
            date={this.props.date}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}

DayPicker.defaultProps = {
  language: 'en',
  customClassName: ''
}

DayPicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  language: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  customClassName: PropTypes.string
}

export default DayPicker
