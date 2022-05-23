import styled from 'styled-components'
import { COLOR } from '.'

export const TabList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
