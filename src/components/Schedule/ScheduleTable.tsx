import styled from 'styled-components'

import { COLOR } from '../Styled'
import ScheduleDayColumn from './ScheduleDayColumn'
import ScheduleTimeColumn from './ScheduleTimeColumn'

const ScheduleTableWrapper = styled.div`
  position: sticky;
  top: 70px;

  flex: 1;
  display: flex;
  height: fit-content;
`
const ScheduleTable = styled.div`
  display: flex;
  gap: 1px;
  flex: 1;

  border: 1px solid ${COLOR.GRAY5};
  border-radius: 10px;

  overflow: hidden;
  width: min(100%, 400px);

  margin-left: 10px;
  background-color: ${COLOR.GRAY5};
`

export default () => {
  const weekly = ['월', '화', '수', '목', '금']
  return (
    <ScheduleTableWrapper>
      <ScheduleTimeColumn></ScheduleTimeColumn>
      <ScheduleTable>
        {weekly.map((day) => (
          <ScheduleDayColumn day={day} lectures={[]}></ScheduleDayColumn>
        ))}
      </ScheduleTable>
    </ScheduleTableWrapper>
  )
}
