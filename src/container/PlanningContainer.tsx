import { Route, Outlet } from 'react-router-dom'
import { Text } from '@/components/Styled'
import styled from '@emotion/styled'
import LayoutHeader from '@/components/Layout/LayoutHeader'

const PlanningContainer = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 100%;

  padding: 50px 0 20px 0;
  flex-direction: column;
`

const PlanningTitleBox = styled.div`
  width: 100%;
  margin-bottom: 80px;
  font-size: 24px;
  font-weight: bold;
`

export default () => {
  return (
    <PlanningContainer>
      {/* <LayoutHeader></LayoutHeader> */}
      <PlanningTitleBox>시간표 생성하기</PlanningTitleBox>
      <Outlet />
    </PlanningContainer>
  )
}
