import LectureSegment from '@/components/Schedule/LectureSegment'
import { COLOR, CustomModal } from '@/components/Styled'
import { Tab, TabList } from '@/components/Styled/Tab'
import { useAsync } from '@/hook'
import { useAsyncEffect } from '@/hook/useAsync'
import { LectureInfo } from '@/types/lecture.types'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import './AddLectureModal.scss'

const LectureList = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 20px;
  height: calc(100% - 50px);
  overflow-y: auto;
`

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  padding: 8px 20px;
`

const StyledInput = styled.input`
  display: flex;
  width: 100%;
  height: 32px;
  padding: 10px 17px;

  border: none;
  border-radius: 45px;

  font-size: 11px;
  color: var(--gray60);

  outline: none;
  background-color: #0000000d;
`

export default (props: Props) => {
  const [tab, setTab] = useState(1)
  const changeTab = (v: number) => {
    console.log(v)
  }

  const [lectures, setLectures] = useState([])
  const getLectures = async () => {
    const response = await axios.get(
      `https://www.lecture-planner.com/api/v1/lecture/search/?universityId=1`,
    )

    setLectures(response.data.data)
  }

  useEffect(() => {
    getLectures()
  }, [])

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
        <OptionWrapper>
          123
          <StyledInput placeholder="강의명, 학과, 교수"></StyledInput>
        </OptionWrapper>
        <LectureList>
          {(lectures as LectureInfo[])?.map((lecture) => (
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
