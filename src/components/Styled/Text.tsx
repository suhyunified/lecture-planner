import styled from 'styled-components'

type TextProps = {
  color?: string
  weight?: number
  size?: number
}

export const Text = styled.div<TextProps>`
  color: ${(props) => props.color ?? 'inherit'};
  font-weight: ${(props) => props.weight ?? 'regular'};
  font-size: ${(props) => (props.size ? props.size + 'px' : 'inherit')};
`
