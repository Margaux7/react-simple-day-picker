import React from 'react';
import PropTypes from 'prop-types'
import Day from './Day'

const Weekday = props => {
  return (
    <tr>
      {
        props.days.map((day, index) => {
          const date = new Date(props.year, props.month + 1, day)
          return <Day key={index} day={day} date={date} {...props} />
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
