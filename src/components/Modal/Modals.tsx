import { ModalsDispatchContext, ModalsStateContext } from '@/context'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import LectureInfoModal from '../Creation/Modal/LectureInfoModal'
import { COLOR } from '../Styled'

export const modals = {
  lectureInfoModal: LectureInfoModal,
}

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  background-color: ${COLOR.BLACK};
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 2;
`

const Modals = () => {
  const openedModals = useContext(ModalsStateContext)
  const { close } = useContext(ModalsDispatchContext)

  const [isShown, setShown] = useState(false)

  useEffect(() => {
    setShown(openedModals.length > 0)
  }, [openedModals])

  return isShown ? (
    <ModalWrapper>
      {openedModals.map((modal, index) => {
        const { Component, props } = modal
        const { onSubmit, ...restProps } = props

        const handleSubmit = async () => {
          if (typeof onSubmit === 'function') {
            await onSubmit()
          }

          onClose()
        }

        const onClose = () => {
          close(Component)
        }

        return (
          <Component
            key={index}
            {...restProps}
            // @ts-ignore
            onClose={onClose}
            onSubmit={handleSubmit}
          />
        )
      })}
    </ModalWrapper>
  ) : (
    <></>
  )
}

export default Modals
