import { useContext } from 'react'

import { ModalsDispatchContext } from '@/context'
import { ModalComponent } from '@/types/modal.types'

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext)

  const openModal = (Component: ModalComponent, props: Record<any, any>) => {
    open(Component, props)
  }

  const closeModal = (Component: ModalComponent) => {
    close(Component)
  }

  return {
    openModal,
    closeModal,
  }
}
