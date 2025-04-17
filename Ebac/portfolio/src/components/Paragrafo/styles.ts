import styled from 'styled-components'
import { Props } from '.'

export const Paragrafo = styled.p<Props>`
  font-size: 14px;
  margin-bottom: 16px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
