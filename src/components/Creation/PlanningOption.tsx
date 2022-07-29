import styled from '@emotion/styled'
import { Text, WEIGHT } from '@/components/Styled'
import { COLOR } from '@/components/Styled'
import { Select, Input } from '@chakra-ui/react'
import { PlanningOptions } from '@/types/planning.types'
import { css } from '@emotion/react'
import { ReactElement, ReactEventHandler, useState } from 'react'
import { universityCandidates } from '@/fixtures'

const PlanningOption = styled.div`
  display: flex;
  width: min(100%, 500px);
  padding: 30px 0;
  flex-direction: column;
  justify-content: center;
  /* min-height: calc(100% - 20px); */
  gap: 24px;
`

const OptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`

const selectCss = css`
  font-weight: bold;
  max-width: 2000px;

  &::placeholder {
    color: var(--gray60);
  }
`

export default ({}: Props) => {
  const departmentCandidates = [
    {
      id: 1,
      text: '컴퓨터공학과',
    },
  ]

  const [options, setOptions] = useState<PlanningOptions>({
    universityId: 0,
    departmentId: 0,
    maxCredit: 0,
    minCredit: 0,
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setOptions((state) => ({ ...state, [name]: value }))
  }

  const onChangeNumberInputHanlder = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target
    if (isNaN(+value)) return
    setOptions((state) => ({ ...state, [name]: +value }))
  }

  return (
    <PlanningOption>
      <OptionBox>
        저는
        <div>
          <Select
            name="universityId"
            onChange={onChangeHandler}
            value={options.universityId}
            css={selectCss}
            w="fit-content"
            maxW="250px"
            color="primary"
            focusBorderColor="primary"
            variant="flushed"
            placeholder="학교명"
            _placeholder={{ color: 'black' }}
          >
            {universityCandidates.map((univ) => (
              <option value={+univ.id} key={`univ-${univ.id}`}>
                {univ.text}
              </option>
            ))}
          </Select>
        </div>
        학생입니다.
      </OptionBox>

      <OptionBox>
        전공은
        <Select
          name="departmentId"
          onChange={onChangeHandler}
          value={options.departmentId}
          css={selectCss}
          w="fit-content"
          maxW="250px"
          color="primary"
          focusBorderColor="primary"
          variant="flushed"
          placeholder="학과명"
          _placeholder={{ color: 'black' }}
        >
          {departmentCandidates.map((dep) => (
            <option value={dep.id} key={`dep-${dep.id}`}>
              {dep.text}
            </option>
          ))}
        </Select>
        입니다.
      </OptionBox>
      <div></div>
      <OptionBox>이번 학기에</OptionBox>
      <OptionBox>
        최소
        <Input
          name="minCredit"
          width={'60px'}
          textAlign="center"
          fontWeight="bold"
          textColor="primary"
          focusBorderColor="primary"
          value={options.minCredit}
          onChange={onChangeNumberInputHanlder}
        />
        학점, 최대
        <Input
          name="maxCredit"
          width={'60px'}
          textAlign="center"
          fontWeight="bold"
          textColor="primary"
          focusBorderColor="primary"
          value={options.maxCredit}
          onChange={onChangeNumberInputHanlder}
        />
        학점을
      </OptionBox>
      <OptionBox>수강할 예정입니다.</OptionBox>
    </PlanningOption>
  )
}

type Props = {}
