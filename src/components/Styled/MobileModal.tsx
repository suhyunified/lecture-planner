import ReactModal from 'react-modal'
import './MobileModal.scss'

const mobileModalStyle = {
  content: {
    top: '5vh',
    width: '90vw',
    height: '90vh',
    borderRadius: '20px 20px 0px 0px',
  },
}

export const MobileModal = ({ children }: Props) => {
  return (
    <ReactModal className="Modal" isOpen>
      {children}
    </ReactModal>
  )
}

type Props = {
  children: JSX.Element
}
