import CreationLectureOption from '@/components/Creation/CreationLectureOption'
import AddLectureModal from '@/components/Creation/Modal/AddLectureModal'
import { modals } from '@/components/Modal/Modals'
import ScheduleTable from '@/components/Schedule/ScheduleTable'
import { CustomModal } from '@/components/Styled'
import { Button, FloatingButton } from '@/components/Styled/Button'
import useModals from '@/hook/useModal'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const CreationLectureView = styled.div`
  display: flex;
  gap: 20px;
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
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <CreationLectureView>
      <Section>
        <ScheduleTable></ScheduleTable>
      </Section>
      <Section maxWidth="500px">
        <CreationLectureOption></CreationLectureOption>
        <FloatingButton onClick={openModal}>
          <span>강의 추가하기</span>
        </FloatingButton>
      </Section>
      <AddLectureModal
        showModal={showModal}
        setShowModal={setShowModal}
      ></AddLectureModal>
    </CreationLectureView>
  )
}
