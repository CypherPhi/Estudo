import styled from 'styled-components'
import { Props } from '.'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(Props) => (Props.fontSize ? Props.fontSize + 'px' : '14px')};
  font-weight: bold;
`
