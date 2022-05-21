import styled from 'styled-components'

const RootDiv = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--gray-f7);
`

const InnerDiv = styled.div`
  display: flex;
  position: relative;
  border-color: black;
  border-left: 1px solid;
  border-right: 1px solid;

  width: 100vw;
  height: fit-content;

  max-width: 1000px;
  min-height: 100vh;
`

const RootLayout = ({ children }: Props) => {
  return (
    <RootDiv>
      <InnerDiv>{children}</InnerDiv>
    </RootDiv>
  )
}

type Props = {
  children: JSX.Element
}

export default RootLayout
