import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Button = {
  width?: string | number
}

export const Button = styled.button<Button>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  width: min(100%, 320px);
  background-color: var(--primary-90);

  padding: 16px;
  color: var(--white);
  cursor: pointer;

  border: none;
  border-radius: 24px;
`

const FloatingButtonWrapper = styled.div`
  position: fixed;
  top: calc(100vh - 64px);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0 16px;
`

const UILink = styled(Link)`
  width: min(100%, 320px);
  text-decoration: none;
`

export const FloatingButton = ({ to, children }: FloatingButtonProps) => (
  <FloatingButtonWrapper>
    {to ? (
      <UILink to={to}>
        <Button>{children}</Button>
      </UILink>
    ) : (
      <Button>{children}</Button>
    )}
  </FloatingButtonWrapper>
)

type FloatingButtonProps = {
  to?: string
  children?: JSX.Element
}
