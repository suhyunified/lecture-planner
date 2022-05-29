import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR } from '.'

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
  width: 100%;
  color: var(--white);
  text-decoration: none;
`

export const FloatingButton = ({ to, children }: FloatingButtonProps) => (
  <FloatingButtonWrapper>
    {to ? (
      <Button>
        <UILink to={to}>{children}</UILink>
      </Button>
    ) : (
      <Button>{children}</Button>
    )}
  </FloatingButtonWrapper>
)

type FloatingButtonProps = {
  to?: string
  children?: JSX.Element
}
