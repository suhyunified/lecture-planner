import styled from 'styled-components'
import { LectureInfo } from '@/types/lecture.types'
import { COLOR } from '../Styled'

type Props = {
  day: string
  lectures: LectureInfo[]
  className?: string
}

const ScheduleDayColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1px;
`

const ScheduleDayHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  font-size: 12px;
  height: 40px;
  color: #00000080;
`

const ScheduleCell = styled.div`
  width: 100%;
  height: 50px;
  background: white;
`

export default (props: Props) => {
  return (
    <ScheduleDayColumn>
      <ScheduleDayHeader>{props.day}</ScheduleDayHeader>

      <ScheduleCell className="cell"></ScheduleCell>
      <ScheduleCell className="cell"></ScheduleCell>
      <ScheduleCell className="cell"></ScheduleCell>
      <ScheduleCell className="cell"></ScheduleCell>
      <ScheduleCell className="cell"></ScheduleCell>
      <ScheduleCell className="cell"></ScheduleCell>
      <ScheduleCell className="cell"></ScheduleCell>
      <ScheduleCell className="cell"></ScheduleCell>
      <ScheduleCell className="cell"></ScheduleCell>
      <ScheduleCell className="cell"></ScheduleCell>
    </ScheduleDayColumn>
  )
}
