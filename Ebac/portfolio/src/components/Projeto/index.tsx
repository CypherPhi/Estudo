import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Title>Projeto lista de Tarefa</Title>
    <Paragrafo tipo="secundario">Lista de Tarefa feito com vue</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
