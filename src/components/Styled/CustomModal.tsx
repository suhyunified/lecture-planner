import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);

  position: fixed;
  top: 0;
  left: 0;
`

type ModalWrapperProps = {
  open: boolean
}
const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: ${(props) => (props.open ? 10 : 0)};
  transition-duration: 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`

type ModalContentProps = {
  open: boolean
}

const ModalContent = styled.div<ModalContentProps>`
  position: relative;
  min-width: 400px;
  min-height: 300px;
  border-radius: 20px;
  background-color: #ffffff;
  transform: ${(props) =>
    props.open ? 'translateY(10vh)' : 'translateY(100vh)'};
  transition-duration: 300ms;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    width: 90vw;
    height: 90vh;
    border-radius: 20px 20px 0px 0px;
  }
`

export const CustomModal = ({ showModal, setShowModal, children }: Props) => {
  const [isOpen, setOpen] = useState(false)
  const [debounce, setDebounce] = useState(false)

  useEffect(() => {
    showModal ? show() : close()
  }, [showModal])

  const close = () => {
    setDebounce(false)
    setTimeout(() => {
      setShowModal(false)
      setOpen(false)
    }, 300)
  }

  const show = () => {
    setOpen(true)
    setTimeout(() => {
      setDebounce(true)
    }, 50)
  }

  return (
    <>
      {isOpen ? (
        <ModalWrapper open={debounce}>
          <Backdrop onClick={close}></Backdrop>
          <ModalContent open={debounce}>{children}</ModalContent>
        </ModalWrapper>
      ) : null}
    </>
  )
}

type Props = {
  showModal: boolean
  setShowModal: Function
  children: JSX.Element
}
