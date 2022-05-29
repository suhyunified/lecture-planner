import styled from 'styled-components'
import { COLOR } from '.'

type TabListProps = {
  fluid?: boolean
}

export const TabList = styled.ul<TabListProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${(props) => props.fluid && { width: '100%' }}
`

type TabProps = {
  active?: boolean
}

export const Tab = styled.div<TabProps>`
  padding: 16px;
  font-size: 12px;
  list-style: none;

  cursor: pointer;
  ${(props) =>
    props.active
      ? {
          color: COLOR.PRIMARY,
          fontWeight: 700,
        }
      : {
          color: COLOR.BLACK,
        }}
`
