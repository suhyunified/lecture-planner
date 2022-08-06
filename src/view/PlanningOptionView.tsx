import styled from '@emotion/styled'

import { FloatingButton } from '@/components/Styled/Button'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { planningOptionState } from '@/recoil/creation.store'
import PlanningOption from '@/components/Creation/PlanningOption'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const PlanningOptionView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
  background-color: red;
`

export default () => {
  return (
    <>
      <PlanningOptionView>
        <PlanningOption></PlanningOption>
      </PlanningOptionView>

      <FloatingButton to="/planning/lecture" bottom={50}>
        <p>옵션 설정 완료</p>
      </FloatingButton>
    </>
  )
}
