import { Modal, ModalComponent } from '@/types/modal.types'
import React, { createContext } from 'react'

export const ModalsDispatchContext = createContext<ModalDispatchContext>({
  open: () => {},
  close: () => {},
})

export const ModalsStateContext = createContext<Modal[]>([])

type ModalDispatchContext = {
  open: (Component: ModalComponent, props: Record<any, any>) => void
  close: (Component: ModalComponent) => void
}
