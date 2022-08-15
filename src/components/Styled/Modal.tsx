import ReactModal from 'react-modal'
import './Modal.scss'

export const Modal = ({ children }: Props) => {
  return <ReactModal isOpen>{children}</ReactModal>
}

type Props = {
  children: JSX.Element
}
