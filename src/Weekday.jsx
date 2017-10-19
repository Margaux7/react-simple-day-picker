import React from 'react';
import PropTypes from 'prop-types'
import Day from './Day'

const Weekday = props => {
  return (
    <tr className="picker-table-tr">
      {
        props.days.map((day, index) => {
          const currDate = new Date(props.year, props.month, day)
          return <Day key={index} day={day} currDate={currDate} {...props} />
        })
      }
    </tr>
  )
}

Weekday.propTypes = {
  days: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])).isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired
}

export default Weekday
