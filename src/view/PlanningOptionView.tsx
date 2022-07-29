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
  height: 100%;
  min-height: calc(100% - 50px);
`

const PlanningTitleBox = styled.div`
  width: 100%;
  margin-bottom: 80px;
`

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 48px;

  width: 100%;
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
      <LinkButton to="/planning/lecture">
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
      </LinkButton>
    </PlanningOptionLayout>
  )
}
