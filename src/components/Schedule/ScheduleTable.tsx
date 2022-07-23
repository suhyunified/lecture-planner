import { useTimeTable } from '@/hook'
import { DAY_KR, LectureInfo } from '@/types/lecture.types'
import { useEffect } from 'react'
import styled from '@emotion/styled'

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
  const { timeTable, initLectures } = useTimeTable()

  const lectures: LectureInfo[] = [
    {
      id: 1,
      department: '대양휴머니티칼리지',
      code: '009066',
      name: 'English Writing 2',
      classNumber: 1,
      type: 'GENERAL_REQUIRED',
      targetYear: 1,
      applyCredit: 2.0,
      language: 'KOR',
      timetables: [
        { targetDay: '월', startTime: '14:00:00', endTime: '15:00:00' },
        { targetDay: '수', startTime: '14:00:00', endTime: '15:00:00' },
      ],
    },
    {
      id: 1,
      department: '대양휴머니티칼리지',
      code: '009066',
      name: 'English Writing 2',
      classNumber: 1,
      type: 'GENERAL_REQUIRED',
      targetYear: 1,
      applyCredit: 2.0,
      language: 'KOR',
      timetables: [
        { targetDay: '월', startTime: '15:00:00', endTime: '16:00:00' },
        { targetDay: '수', startTime: '15:00:00', endTime: '16:00:00' },
      ],
    },

    {
      id: 4,
      department: '대양휴머니티칼리지',
      code: '010352',
      name: 'English Listening Practice 1',
      classNumber: 3,
      type: 'GENERAL_REQUIRED',
      targetYear: 1,
      applyCredit: 2.0,
      language: 'ENG',
      timetables: [
        { targetDay: '화', startTime: '15:00:00', endTime: '16:30:00' },
        { targetDay: '화', startTime: '16:30:00', endTime: '17:00:00' },
      ],
    },
  ]

  useEffect(() => {
    initLectures(lectures)
  }, [])

  const weekly: (keyof typeof DAY_KR)[] = ['월', '화', '수', '목', '금']
  return (
    <ScheduleTableWrapper>
      <ScheduleTimeColumn></ScheduleTimeColumn>
      <ScheduleTable>
        {weekly.map((day) => (
          <ScheduleDayColumn
            day={day}
            lectures={timeTable[DAY_KR[day]]}
            key={`timetable-${day}`}
          ></ScheduleDayColumn>
        ))}
      </ScheduleTable>
    </ScheduleTableWrapper>
  )
}
