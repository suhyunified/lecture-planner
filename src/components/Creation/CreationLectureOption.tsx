import styled from 'styled-components'
import { Segment } from '@/components/Styled/Segment'
import { Tab, TabList } from '@/components/Styled/Tab'
import LectureSegment from '../Schedule/LectureSegment'
import { LectureInfo } from '@/types/lecture.types'

const CreationLectureOption = styled.div``
const LectureList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  gap: 8px;
`

export default () => {
  const dummy = {
    totalCount: 3193,
    currentPage: 0,
  }

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
        { targetDay: '월', startTime: '14:00:00', endTime: '15:00:00' },
        { targetDay: '수', startTime: '14:00:00', endTime: '15:00:00' },
      ],
    },
    {
      id: 2,
      department: '대양휴머니티칼리지',
      code: '010352',
      name: 'English Listening Practice 1',
      classNumber: 1,
      type: 'GENERAL_REQUIRED',
      targetYear: 1,
      applyCredit: 2.0,
      language: 'ENG',
      timetables: [
        { targetDay: '월', startTime: '15:00:00', endTime: '16:30:00' },
      ],
    },
    {
      id: 3,
      department: '대양휴머니티칼리지',
      code: '010352',
      name: 'English Listening Practice 1',
      classNumber: 2,
      type: 'GENERAL_REQUIRED',
      targetYear: 1,
      applyCredit: 2.0,
      language: 'ENG',
      timetables: [
        { targetDay: '월', startTime: '15:00:00', endTime: '16:30:00' },
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
      ],
    },
    {
      id: 5,
      department: '대양휴머니티칼리지',
      code: '010352',
      name: 'English Listening Practice 1',
      classNumber: 4,
      type: 'GENERAL_REQUIRED',
      targetYear: 1,
      applyCredit: 2.0,
      language: 'ENG',
      timetables: [
        { targetDay: '화', startTime: '15:00:00', endTime: '16:30:00' },
      ],
    },
  ]
  return (
    <CreationLectureOption>
      <TabList>
        <Tab active>필수 강의</Tab>
        <Tab>선택 강의</Tab>
        <Tab>직접 추가</Tab>
      </TabList>
      <LectureList>
        {lectures.map((lecture: LectureInfo) => (
          <LectureSegment lecture={lecture}></LectureSegment>
        ))}
      </LectureList>
    </CreationLectureOption>
  )
}
