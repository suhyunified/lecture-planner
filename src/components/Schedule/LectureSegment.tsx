import styled from '@emotion/styled'
import { Segment } from '../Styled/Segment'
import { LectureInfo, TimeTableType } from '@/types/lecture.types'
import { COLOR, Text, WEIGHT } from '../Styled'
import { modals } from '../Modal/Modals'
import useModals from '@/hook/useModal'

const LectureSegment = styled(Segment)`
  display: flex;
  gap: 2px;
  cursor: pointer;
  min-height: 70px;
  flex-direction: column;
`

const FlexDiv = styled.div`
  display: flex;
  color: var(--gray60);
  justify-content: space-between;
`

const TimeTableDiv = styled.li`
  display: flex;
  align-items: center;

  height: 12px;
  font-size: 10px;
  list-style: none;
  color: var(--gray60);
`
const TimeTableList = styled.ul`
  display: flex;
  flex-direction: column;
`

const LectureInfoDiv = styled.div`
  display: flex;
  column-gap: 8px;
  font-size: 10px;
  color: var(--gray60);
`

const DividerSpan = styled.span`
  width: 10px;
  text-align: center;
`

type TimeTableProps = {
  timetables?: TimeTableType[]
}

const TimeTable = ({ timetables }: TimeTableProps) => {
  return (
    <TimeTableList>
      {!!timetables &&
        timetables.map((timetable: TimeTableType, index) => (
          <TimeTableDiv key={index}>
            <Text>{timetable.targetDay}</Text>
            <Text>{timetable.startTime.slice(0, 5)}</Text>
            <DividerSpan>-</DividerSpan>
            <Text>{timetable.endTime.slice(0, 5)}</Text>
          </TimeTableDiv>
        ))}
    </TimeTableList>
  )
}

type LectureSegmentProps = {
  [key: string]: any
  detail?: boolean
  style?: Record<any, any>
  lecture: LectureInfo
}

export default ({ detail = true, ...props }: LectureSegmentProps) => {
  const { openModal, closeModal } = useModals()
  const openLectureDetailInfoModal = (lecture: LectureInfo) => {
    // @ts-ignore
    openModal(modals.lectureInfoModal, { lecture })
  }

  const { lecture, style } = props
  return (
    <LectureSegment {...props}>
      <FlexDiv>
        <Text size={11} color="#000000" weight={700}>
          {lecture.name}
        </Text>
        <Text size={10} color={COLOR.PRIMARY} weight={WEIGHT.BOLD}>
          {lecture.applyCredit}학점
        </Text>
      </FlexDiv>

      <FlexDiv>
        <LectureInfoDiv>
          {detail && <Text>교수명</Text>}
          <Text>
            {lecture.code}
            {detail && lecture.classNumber && '-' + lecture.classNumber}
          </Text>
        </LectureInfoDiv>
        {detail && (
          <TimeTable timetables={lecture.timetables ?? []}></TimeTable>
        )}
      </FlexDiv>
    </LectureSegment>
  )
}
