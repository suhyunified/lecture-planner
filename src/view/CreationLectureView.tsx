import CreationLectureOption from '@/components/Creation/CreationLectureOption'
import AddLectureModal from '@/components/Creation/Modal/AddLectureModal'
import { modals } from '@/components/Modal/Modals'
import ScheduleTable from '@/components/Schedule/ScheduleTable'
import { CustomModal } from '@/components/Styled'
import { Button, FloatingButton } from '@/components/Styled/Button'
import useModals from '@/hook/useModal'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Box, Portal } from '@chakra-ui/react'

const CreationLectureView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow-y: overlay;

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
    <>
      <CreationLectureView>
        <Section>
          <ScheduleTable></ScheduleTable>
        </Section>
        <Section>
          <CreationLectureOption></CreationLectureOption>
        </Section>
        <AddLectureModal
          showModal={showModal}
          setShowModal={setShowModal}
        ></AddLectureModal>
      </CreationLectureView>

      <Box
        as="button"
        fontSize={16}
        textColor="white"
        fontWeight="bold"
        borderRadius={33}
        backgroundColor="primary"
        position="absolute"
        width="90%"
        bottom="50px"
        paddingY="16px"
        paddingX="18px"
        onClick={openModal}
      >
        강의 추가하기
      </Box>
    </>
  )
}
