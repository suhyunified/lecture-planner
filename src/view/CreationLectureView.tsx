import CreationLectureOption from '@/components/Creation/CreationLectureOption'
import ScheduleTable from '@/components/Schedule/ScheduleTable'
import styled from 'styled-components'

const CreationLectureView = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  height: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

type SectionProps = {
  maxWidth?: string
}

const Section = styled.div<SectionProps>`
  display: flex;
  justify-content: center;
  flex: 1;
  height: 100%;
  max-width: ${(props) => props.maxWidth ?? 'none'};

  @media screen and (max-width: 900px) {
    max-width: none;
  }
`
export default () => {
  return (
    <CreationLectureView>
      <Section>
        <ScheduleTable></ScheduleTable>
      </Section>
      <Section maxWidth="500px">
        <CreationLectureOption></CreationLectureOption>
      </Section>
    </CreationLectureView>
  )
}
