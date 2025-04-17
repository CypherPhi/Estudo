import { Paragrafo as ParagrafoEstilo } from './styles'

export type Props = {
  children: string
  tipo: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <ParagrafoEstilo tipo={tipo}>{children}</ParagrafoEstilo>
)
export default Paragrafo
