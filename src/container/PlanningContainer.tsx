import { Route, Outlet } from 'react-router-dom'
import styled from '@emotion/styled'
import LayoutHeader from '@/components/Layout/LayoutHeader'
import CreationOptionView from '@/view/PlanningOptionView'

const PlanningContainer = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  padding: 0 20px;
  flex-direction: column;
`

export default () => {
  return (
    <PlanningContainer>
      <LayoutHeader></LayoutHeader>
      <Outlet />
    </PlanningContainer>
  )
}
