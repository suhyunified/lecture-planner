import styled from 'styled-components'
import Calendar from '@toast-ui/react-calendar'
import 'tui-calendar/dist/tui-calendar.css'

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'
import { COLOR } from '../Styled'
import ScheduleDayColumn from './ScheduleDayColumn'
import ScheduleTimeColumn from './ScheduleTimeColumn'

const ScheduleTable = styled.div`
  position: sticky;
  top: 70px;

  display: flex;
  gap: 1px;
  flex: 1;

  border: 1px solid ${COLOR.GRAY5};
  border-radius: 10px;

  width: min(100%, 400px);
  height: fit-content;
  margin-left: 30px;
  background-color: ${COLOR.GRAY5};
`

export default () => {
  const weekly = ['월', '화', '수', '목', '금']
  return (
    <ScheduleTable>
      <ScheduleTimeColumn></ScheduleTimeColumn>
      {weekly.map((day) => (
        <ScheduleDayColumn day={day} lectures={[]}></ScheduleDayColumn>
      ))}
    </ScheduleTable>
  )
}
