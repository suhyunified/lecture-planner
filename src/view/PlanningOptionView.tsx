import styled from '@emotion/styled'
import { Text } from '@/components/Styled'
import { FloatingButton } from '@/components/Styled/Button'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { planningOptionState } from '@/recoil/creation.store'
import PlanningOption from '@/components/Creation/PlanningOption'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const PlanningOptionLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: auto;
  min-height: calc(100% - 50px);
`

const PlanningTitleBox = styled.div`
  width: 100%;
  margin-bottom: 80px;
`

export default () => {
  return (
    <PlanningOptionLayout>
      <PlanningTitleBox>
        <Text size={24} weight={700}>
          시간표 생성하기
        </Text>
      </PlanningTitleBox>
      <PlanningOption></PlanningOption>
      <Link style={{ width: '100%' }} to="/planning/lecture">
        <Box
          as="button"
          borderRadius={33}
          backgroundColor="primary"
          textColor="white"
          fontSize={16}
          paddingY="16px"
          paddingX="18px"
          fontWeight="bold"
          width="90%"
          position="absolute"
          bottom="50px"
        >
          옵션 설정 완료
        </Box>
      </Link>
    </PlanningOptionLayout>
  )
}
