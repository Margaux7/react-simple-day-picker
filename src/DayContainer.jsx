import React from 'react';
import PropTypes from 'prop-types'
import WeekDay from './Weekday'

const DayContainer = props => {
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const Row1 = daysGenerator(props.dayNo, 1, props.maxDay)
  const Row2 = daysGenerator(0, Row1[Row1.length] + 1, props.maxDay)
  const Row3 = daysGenerator(0, Row2[Row2.length] + 1, props.maxDay)
  const Row4 = daysGenerator(0, Row3[Row3.length] + 1, props.maxDay)
  const Row5 = daysGenerator(0, Row4[Row4.length] + 1, props.maxDay)
  const Row6 = daysGenerator(0, Row5[Row5.length] + 1, props.maxDay)

  return (
    <table>
      {weekday.map((index, day) => {
        return <td>{day}</td>
      })}
      <WeekDay days={Row1} {...props}/>
      <WeekDay days={Row2} {...props}/>
      <WeekDay days={Row3} {...props}/>
      <WeekDay days={Row4} {...props}/>
      <WeekDay days={Row5} {...props}/>
      <WeekDay days={Row6} {...props}/>
    </table>
  )
}

const daysGenerator = (dayNo, firstDay, maxDay) => {
  const days = []
  let day
  for(let i = 0; i < 6; i++) {
    day = i >= dayNo && firstDay <= maxDay ? firstDay++ : '' 
    days.push(day)
  }
  return days
}

DayContainer.propTypes = {
  dayNo: PropTypes.number.isRequired,
  maxDay: PropTypes.number.isRequired
}

export default DayContainer
