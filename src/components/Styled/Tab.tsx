import { useState } from 'react'
import styled from '@emotion/styled'
import { COLOR } from '.'

type TabButtonProps = {
  active?: boolean
}
const TabButton = styled.button<TabButtonProps>`
  flex: 1;
  border: none;
  outline: none;
  ${(props) =>
    props.active
      ? {
          color: COLOR.PRIMARY,
          fontWeight: 'bold',
        }
      : {
          color: COLOR.BLACK,
        }}

  height: 50px;
  cursor: pointer;
  padding: 10px 20px;
  background-color: transparent;
`

type InnerTabProps<T> = {
  value: T
  active: boolean
  onChange: (v: T) => void
  children?: JSX.Element
}

export const InnerTab = <T extends string | number>({
  value,
  active,
  onChange,
  children,
}: InnerTabProps<T>) => {
  return (
    <TabButton active={active} onClick={() => onChange(value)}>
      {children}
    </TabButton>
  )
}

type Tab = {
  value?: string | number
  children?: JSX.Element
}

export const Tab = (props: Tab) => <></>

type TabListStyle = {
  fluid?: boolean
}

const TabListStyle = styled.ul<TabListStyle>`
  display: flex;
  align-items: center;

  justify-content: space-around;
  ${(props) => props.fluid && { width: '100%' }}
`

type TabListProps<T> = {
  children: JSX.Element[]
  onChange?: (v: T) => void
}

export const TabList = <T extends number | string>({
  children,
  onChange,
}: TabListProps<T>) => {
  const [value, setValue] = useState<T>(children[0].props.value)

  const handleChange = (v: T) => {
    setValue(v)
    onChange?.(v)
  }

  const generateButton = () => {
    const response = children.map((el, index) => {
      const isTab = el.type.name === 'Tab'
      if (!isTab) return null

      return (
        <InnerTab
          key={index}
          active={value === el.props.value}
          value={el.props.value}
          onChange={() => handleChange(el.props.value)}
        >
          {el.props.children}
        </InnerTab>
      )
    })

    return response
  }
  return <TabListStyle>{generateButton()}</TabListStyle>
}
