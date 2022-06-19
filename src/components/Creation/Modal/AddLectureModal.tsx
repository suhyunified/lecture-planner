import LectureSegment from '@/components/Schedule/LectureSegment'
import { COLOR, CustomModal } from '@/components/Styled'
import { Tab, TabList } from '@/components/Styled/Tab'
import { LectureInfo } from '@/types/lecture.types'

import { useState } from 'react'
import styled from 'styled-components'
import './AddLectureModal.scss'

const LectureList = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 20px;
  height: calc(100% - 50px);
  overflow-y: auto;
`

export default (props: Props) => {
  const [tab, setTab] = useState(1)
  const changeTab = (v: number) => {
    console.log(v)
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

  return (
    <CustomModal showModal={props.showModal} setShowModal={props.setShowModal}>
      <div
        style={{
          height: '90vh',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            top: 0,
            height: '50px',
            position: 'sticky',
            backgroundColor: 'white',
          }}
        >
          <TabList onChange={changeTab}>
            <Tab value={1}>
              <>필수강의</>
            </Tab>
            <Tab value={2}>
              <>선택강의</>
            </Tab>
            <Tab value={3}>
              <>직접 추가</>
            </Tab>
          </TabList>
        </div>
        <LectureList>
          {lectures.map((lecture) => (
            <LectureSegment
              className="add-lecture-modal__segment"
              lecture={lecture}
            ></LectureSegment>
          ))}
        </LectureList>
      </div>
    </CustomModal>
  )
}

type Props = {
  showModal: boolean
  setShowModal: Function
}
