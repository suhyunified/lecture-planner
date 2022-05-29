import styled from 'styled-components'
import { COLOR } from '../Styled'

const ScheduleTimeColumn = styled.div`
  position: absolute;
  top: 0;
  left: -30px;

  display: flex;
  flex-direction: column;
  gap: 1px;

  width: 30px;

  height: 100%;
  color: ${COLOR.GRAY40};
  font-size: 10px;
`

const TimeHeader = styled.div`
  height: 40px;
`
const TimeCell = styled.div`
  flex: 1;
`
export default () => {
  const timeList = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ]
  return (
    <ScheduleTimeColumn>
      <TimeHeader></TimeHeader>
      {timeList.map((time) => (
        <TimeCell>{time}</TimeCell>
      ))}
    </ScheduleTimeColumn>
  )
}
