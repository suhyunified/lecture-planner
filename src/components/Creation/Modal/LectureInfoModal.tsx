import { COLOR, Modal, Text } from '@/components/Styled'
import { Button } from '@/components/Styled/Button'
import { LectureInfo, TimeTableType } from '@/types/lecture.types'
import { useEffect } from 'react'
import styled from 'styled-components'

const LectureInfoModal = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  height: auto;
`

const Info = styled.div`
  display: flex;
  gap: 8px;
  color: ${COLOR.GRAY40};
  align-items: center;
`

const TimeTableDiv = styled.li`
  display: flex;
  align-items: center;

  height: 12px;
  font-size: 9;
  list-style: none;
  color: ${COLOR.GRAY40};
`
const TimeTableList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
`

const DividerSpan = styled.span`
  width: 10px;
  text-align: center;
`

const ActionsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 50px;
`
type TimeTableProps = {
  timetables: TimeTableType[]
}

const TimeTable = ({ timetables }: TimeTableProps) => {
  return (
    <TimeTableList>
      {timetables.map((timetable: TimeTableType) => (
        <TimeTableDiv>
          <Text size={12}>{timetable.targetDay}</Text>
          <Text size={12}>{timetable.startTime.slice(0, 5)}</Text>
          <DividerSpan>-</DividerSpan>
          <Text size={12}>{timetable.endTime.slice(0, 5)}</Text>
        </TimeTableDiv>
      ))}
    </TimeTableList>
  )
}

export default ({ onSubmit, onClose, lecture }: Props) => {
  const handleClickSubmit = () => {
    onSubmit?.()
  }
  const handleClickClose = () => {
    onClose?.()
  }

  useEffect(() => {
    console.log({ lecture })
  }, [])

  return (
    <Modal>
      <LectureInfoModal>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Info>
            <Text weight={700} size={14} color={COLOR.BLACK}>
              {lecture.name}
            </Text>
            <Text weight={700} size={14} color={COLOR.PRIMARY}>
              {lecture?.applyCredit}학점
            </Text>
          </Info>
          <Info>
            <Text color={COLOR.GRAY40} size={14}>
              {lecture.code}
            </Text>
          </Info>
        </div>
        <Info>
          <Text size={12}>교수명</Text>
        </Info>
        <Info>
          <TimeTable timetables={lecture.timetables ?? []} />
        </Info>
        <Info>
          <Text size={12}>강의실 위치</Text>
        </Info>
        <Info>
          <Text size={12}>{lecture.targetYear}학년</Text>
          <Text size={12}>전필</Text>
        </Info>

        <ActionsWrapper>
          <Button onClick={handleClickSubmit}>닫기</Button>
          <Button>삭제</Button>
        </ActionsWrapper>
      </LectureInfoModal>
    </Modal>
  )
}

type Props = {
  onSubmit?: () => void
  onClose?: () => void
  lecture: LectureInfo
}
