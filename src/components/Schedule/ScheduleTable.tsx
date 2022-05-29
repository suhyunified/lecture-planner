import styled from 'styled-components'
import { COLOR } from '../Styled'

const ScheduleTable = styled.div`
  position: sticky;
  top: 70px;
  flex: 1;
  width: min(100%, 400px);
  height: 400px;

  border: 1px solid ${COLOR.GRAY5};
  border-radius: 10px;

  overflow: hidden;
  margin-left: 30px;
  background-color: white;
`

export default () => {
  return <ScheduleTable></ScheduleTable>
}
