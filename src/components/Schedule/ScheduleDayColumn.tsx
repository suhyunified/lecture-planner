import styled from 'styled-components'
import { DAY_KR, LectureInfo } from '@/types/lecture.types'
import { COLOR } from '../Styled'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import React, { useEffect, useState } from 'react'

dayjs.extend(duration)

type ScheduleItem = {
  id: number
  name: string
  targetDay: keyof typeof DAY_KR
  startTime: number[]
  endTime: number[]
}

type Props = {
  day: string
  lectures: ScheduleItem[]
  className?: string
}

const ScheduleDayColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1px;
`

const LectureDiv = styled.div`
  position: absolute;
  left: 0;
  color: white;
  background-color: #ed7272;
  letter-spacing: 0.3px;
  width: 100%;
  padding: 6px;

  overflow: hidden;
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

const ScheduleDayBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1px;
`

const ScheduleCell = styled.div`
  width: 100%;
  height: 60px;
  background: white;
`

export default ({ day, lectures }: Props) => {
  const [items, setItems] = useState<JSX.Element[]>([])

  useEffect(() => {
    const result = lectures.map((lec, index) => {
      const { startTime, endTime } = lec

      const top = dayjs().hour(9).minute(0).valueOf()
      const start = dayjs().hour(startTime[0]).minute(startTime[1]).valueOf()
      const end = dayjs().hour(endTime[0]).minute(endTime[1]).valueOf()
      const startPoint = dayjs.duration(start - top).asMinutes()
      const duration = dayjs.duration(end - start).asMinutes()

      const style = {
        top: startPoint + (startTime[0] - 9) + 'px',
        height: duration + dayjs.duration(end - start).asDays() + 'px',
      }

      return (
        <LectureDiv style={style} key={index}>
          <span
            style={{ fontWeight: 'bold', fontSize: '10px', lineHeight: '12px' }}
          >
            {lec.name}
          </span>
        </LectureDiv>
      )
    })

    setItems(result)
  }, [lectures])

  return (
    <ScheduleDayColumn>
      <ScheduleDayHeader>{day}</ScheduleDayHeader>
      <ScheduleDayBody>
        {items.map((lec) => lec)}
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
      </ScheduleDayBody>
    </ScheduleDayColumn>
  )
}
