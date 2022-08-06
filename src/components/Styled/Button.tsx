import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { COLOR } from '.'
import { Box, InputLeftElement, position, propNames } from '@chakra-ui/react'

type Button = {
  width?: string | number
}

export const Button = styled.button<Button>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  width: min(100%, 500px);
  background-color: ${COLOR.PRIMARY};
  &:hover {
    background-color: ${COLOR.VIOLET};
  }

  transition-duration: 0.3s;

  padding: 16px;
  color: var(--white);
  cursor: pointer;

  border: none;
  border-radius: 24px;
`

const UILink = styled(Link)`
  width: 100%;
  color: var(--white);
  text-decoration: none;
`

export const Outlined = {}

type BaseButton = {
  [key: string]: any
  children?: JSX.Element
}
const BaseButton = ({ children, ...props }: BaseButton) => (
  <Box
    as="button"
    fontSize={16}
    textColor="white"
    fontWeight="bold"
    borderRadius={33}
    backgroundColor="primary"
    width="90%"
    bottom="50px"
    paddingY="16px"
    paddingX="18px"
    {...props}
  >
    {children}
  </Box>
)

const LinkBox = styled(Link)`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 48px;
  width: 100%;
`

type LinkButton = {
  [key: string]: any
  children?: JSX.Element
}
const LinkButton = ({ children, to, ...props }: LinkButton) => {
  return (
    <LinkBox to={to}>
      <BaseButton {...props}>{children}</BaseButton>
    </LinkBox>
  )
}

type FloatingButtonWrapperProps = {
  [key: string]: any
  top?: number
  left?: number
  right?: number
  bottom?: number
}
const FloatingButtonWrapper = styled.div<FloatingButtonWrapperProps>`
  position: sticky;
  display: flex;
  justify-content: center;

  width: 100%;
  ${(props) => {
    const result: Record<any, string> = {}
    if (props.top) result.top = `${props.top}px`
    if (props.left) result.left = `${props.left}px`
    if (props.right) result.right = `${props.right}px`
    if (props.bottom) result.bottom = `${props.bottom}px`
    return result
  }}
`

export const FloatingButton = ({
  children,
  top,
  left,
  right,
  bottom,
  ...props
}: FloatingButtonProps) => {
  const positionAttr = {
    top: top,
    left: left,
    right: right,
    bottom: bottom,
  }

  const genButton = () => {
    const Component = props.to ? LinkButton : BaseButton
    return <Component {...props}>{children}</Component>
  }

  return (
    <FloatingButtonWrapper {...positionAttr}>
      {genButton()}
    </FloatingButtonWrapper>
  )
}

type FloatingButtonProps = {
  [key: string]: any
  children?: JSX.Element
}
