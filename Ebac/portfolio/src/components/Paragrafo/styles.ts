import styled from 'styled-components'
import { Props } from '.'

export const Paragrafo = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  margin: 16px 0;
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-height: 22px;
`
