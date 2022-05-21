import styled from 'styled-components'

const LayoutHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;
  padding: 16px 0;
`

const BackButton = styled.a`
  width: auto;
  height: 16px;
  cursor: pointer;

  font-size: 14px;
  color: var(--black);
`

export default () => {
  return (
    <LayoutHeader>
      <BackButton>뒤로가기</BackButton>
    </LayoutHeader>
  )
}
