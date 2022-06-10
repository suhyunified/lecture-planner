import { Route, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import LayoutHeader from '@/components/Layout/LayoutHeader'
import CreationOptionView from '@/view/CreationOptionView'

const CreationLayout = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  padding: 0 20px;
  flex-direction: column;
`

export default () => {
  return (
    <CreationLayout>
      <LayoutHeader></LayoutHeader>
      <Outlet />
    </CreationLayout>
  )
}
