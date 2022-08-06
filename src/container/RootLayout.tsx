import Modals from '@/components/Modal/Modals'
import styled from '@emotion/styled'

const RootDiv = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  padding: 0 20px;
  overflow: overlay;
  background-color: var(--background);
`

const InnerDiv = styled.div`
  position: relative;
  /* border-color: black; */
  border-left: 1px solid;
  border-right: 1px solid;

  max-width: 500px;
  min-height: 100vh;
  width: 100vw;
  height: 100%;
`

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Modals></Modals>
      <RootDiv>
        <InnerDiv>{children}</InnerDiv>
      </RootDiv>
    </>
  )
}

type Props = {
  children: JSX.Element
}

export default RootLayout
