import { Modal, ModalComponent } from '@/types/modal.types'
import React, { useMemo, useState } from 'react'
import { ModalsDispatchContext, ModalsStateContext } from './modal.context'

const ModalsProvider = ({ children }: ModalsProviderProps) => {
  const [openedModals, setOpenedModals] = useState<Modal[]>([])

  const open = (Component: ModalComponent, props: Record<any, any>) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }]
    })
  }

  const close = (Component: ModalComponent) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component
      })
    })
  }

  const dispatch = useMemo(() => ({ open, close }), [])

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  )
}

export default ModalsProvider

type ModalsProviderProps = {
  children: JSX.Element
}
