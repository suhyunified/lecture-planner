import styled from 'styled-components'
import { Text, WEIGHT } from '@/components/Styled'
import { COLOR } from '@/components/Styled'

const CreationOption = styled.div`
  display: flex;
  width: min(100%, 500px);
  padding: 30px 0;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100% - 20px);
  gap: 30px;
`

const Option = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;
`

export default () => {
  return (
    <CreationOption>
      <Option>
        <Text>저는</Text>
        <Text color={COLOR.PRIMARY} weight={WEIGHT.BOLD}>
          세종대학교
        </Text>
        <Text>학생입니다.</Text>
      </Option>
      <Option>
        <Text>전공은</Text>
        <Text color={COLOR.PRIMARY} weight={WEIGHT.BOLD}>
          컴퓨터공학과
        </Text>
        <Text>입니다.</Text>
      </Option>
      <div></div>
      <Option>
        <Text>이번 학기에</Text>
      </Option>
      <Option>
        <Text>최소</Text>
        <Text color={COLOR.PRIMARY} weight={WEIGHT.BOLD}>
          16
        </Text>
        <Text>학점,</Text>
        <Text>최대</Text>
        <Text color={COLOR.PRIMARY} weight={WEIGHT.BOLD}>
          20
        </Text>
        <Text>학점을</Text>
      </Option>
      <Option>
        <Text>수강할 예정입니다.</Text>
      </Option>
    </CreationOption>
  )
}
