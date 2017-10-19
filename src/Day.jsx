import React from 'react'
import PropTypes from 'prop-types'

const Day = props => {
  return (
    <td
      className={
        props.day === '' ?
        'picker-table-empty-td' :
        'picker-table-td'
      }
      onClick={props.day === '' ?
        null :
        () => props.handleSelect(props.currDate)}
    >
      {props.day}
    </td>
  )
}

Day.propTypes = {
  day: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  handleSelect: PropTypes.func.isRequired,
  currDate: PropTypes.instanceOf(Date).isRequired
}

export default Day
