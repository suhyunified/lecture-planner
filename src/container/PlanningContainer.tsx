import { Route, Outlet } from 'react-router-dom'
import { Text } from '@/components/Styled'
import styled from '@emotion/styled'
import LayoutHeader from '@/components/Layout/LayoutHeader'

const PlanningContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  padding: 50px 0 20px 0;
`

const PlanningTitleBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`

const OutletBox = styled(Outlet)`
  flex: 1;
`

export default () => {
  return (
    <PlanningContainer>
      {/* <LayoutHeader></LayoutHeader> */}
      <PlanningTitleBox>시간표 생성하기</PlanningTitleBox>
      <OutletBox />
    </PlanningContainer>
  )
}
