import styled from 'styled-components'
import CreationOption from '@/components/Creation/CreationOption'
import { Text } from '@/components/Styled'
import { FloatingButton } from '@/components/Styled/Button'

const CreationOptionView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: auto;
  min-height: calc(100vh - 50px);
`

const CreationTitle = styled.div`
  height: 20px;
  width: 100%;
`

export default () => {
  return (
    <CreationOptionView>
      <CreationTitle>
        <Text size={16} weight={700}>
          시간표 생성하기
        </Text>
      </CreationTitle>
      <CreationOption></CreationOption>
      <FloatingButton to="/creation/lecture">
        <Text size={12}>옵션 설정 완료</Text>
      </FloatingButton>
    </CreationOptionView>
  )
}
