import { Paragrafo as ParagrafoEstilo } from './styles'

export type Props = {
  children: string
  tipo: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <ParagrafoEstilo fontSize={fontSize} tipo={tipo}>
    {children}
  </ParagrafoEstilo>
)
export default Paragrafo
