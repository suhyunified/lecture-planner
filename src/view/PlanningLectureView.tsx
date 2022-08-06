import PlanningAddedLectures from '@/components/Creation/PlanningAddedLectures'
import AddLectureModal from '@/components/Creation/Modal/AddLectureModal'
import { modals } from '@/components/Modal/Modals'
import ScheduleTable from '@/components/Schedule/ScheduleTable'
import { CustomModal } from '@/components/Styled'
import { Button, FloatingButton } from '@/components/Styled/Button'
import useModals from '@/hook/useModal'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Box, Portal } from '@chakra-ui/react'

const PlanningLectureView = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

const StickyLayout = styled.div`
  position: sticky;
  top: 0;
`

export default () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <PlanningLectureView>
        <ScheduleTable></ScheduleTable>
        <StickyLayout>
          <PlanningAddedLectures></PlanningAddedLectures>
        </StickyLayout>
        <AddLectureModal
          showModal={showModal}
          setShowModal={setShowModal}
        ></AddLectureModal>
      </PlanningLectureView>

      <FloatingButton onClick={openModal} bottom={50}>
        <p>강의 추가하기</p>
      </FloatingButton>
    </>
  )
}
