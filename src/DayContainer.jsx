import React from 'react';
import PropTypes from 'prop-types'
import WeekDay from './Weekday'

const weekdayEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const weekdayZh = ['日', '一', '二', '三', '四', '五', '六']

const DayContainer = props => {
  const Row1 = daysGenerator(props.dayNo, 1, props.maxDay)
  const Row2 = daysGenerator(0, Row1[Row1.length - 1] + 1, props.maxDay)
  const Row3 = daysGenerator(0, Row2[Row2.length - 1] + 1, props.maxDay)
  const Row4 = daysGenerator(0, Row3[Row3.length - 1] + 1, props.maxDay)
  const Row5 = daysGenerator(0, Row4[Row4.length - 1] + 1, props.maxDay)
  const Row6 = Row5[Row5.length - 1] !== '' && Row5[Row5.length - 1] < props.maxDay ?
    daysGenerator(0, Row5[Row5.length - 1] + 1, props.maxDay) :
    null

  return (
    <table className="picker-table">
      <tbody className="picker-table-body">
        <tr className="picker-table-head-tr">
          {props.language === 'en' ?
            weekdayEn.map((day, index) => {
              return <td key={index}>{day}</td>
            }) :
            weekdayZh.map((day, index) => {
              return <td key={index}>{day}</td>
            })
        }
        </tr>
        <WeekDay days={Row1} {...props} />
        <WeekDay days={Row2} {...props} />
        <WeekDay days={Row3} {...props} />
        <WeekDay days={Row4} {...props} />
        <WeekDay days={Row5} {...props} />
        {Row6 ? <WeekDay days={Row6} {...props} /> : null}
      </tbody>
    </table>
  )
}

const daysGenerator = (dayNo, firstDay, maxDay) => {
  const days = []
  let day
  for (let i = 0; i < 7; i++) {
    day = (i >= dayNo && firstDay <= maxDay) ? firstDay++ : ''
    days.push(day)
  }
  return days
}

DayContainer.defaultProps = {
  language: 'en'
}

DayContainer.propTypes = {
  dayNo: PropTypes.number.isRequired,
  maxDay: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  language: PropTypes.string
}

export default DayContainer
