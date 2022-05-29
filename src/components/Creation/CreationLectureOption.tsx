import styled from 'styled-components'
import { Segment } from '@/components/Styled/Segment'
import { Tab, TabList } from '@/components/Styled/Tab'
import LectureSegment from '../Schedule/LectureSegment'
import { LectureInfo } from '@/types/lecture.types'
import { useState } from 'react'
import { COLOR } from '../Styled'

const CreationLectureOption = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 500px);
`

const TabWrapper = styled.div`
  position: sticky;
  top: 49px;
  padding-top: 20px;
  background-color: ${COLOR.BACKGROUND};
`

const LectureList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  gap: 8px;

  padding: 8px 0 90px 0;
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

  const [activeTab, setActiveTab] = useState<number>(1)
  const tabs = [
    {
      text: '필수 강의',
      value: 1,
    },
    {
      text: '선택 강의',
      value: 2,
    },
    {
      text: '직접 추가',
      value: 3,
    },
  ]

  return (
    <CreationLectureOption>
      <TabWrapper>
        <TabList fluid>
          {tabs.map((tab) => (
            <Tab
              active={activeTab === tab.value}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.text}
            </Tab>
          ))}
        </TabList>
      </TabWrapper>
      <LectureList>
        {lectures.map((lecture: LectureInfo) => (
          <LectureSegment
            detail={activeTab === 1}
            lecture={lecture}
          ></LectureSegment>
        ))}
      </LectureList>
    </CreationLectureOption>
  )
}
