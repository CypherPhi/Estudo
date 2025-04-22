import styled from 'styled-components'
import Paragrafo from '../../components/Paragrafo'

export const Descricao = styled(Paragrafo)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  font-size: 10px;
  border-radius: 12px;
  color: ${(props) => props.theme.corDeFundo};
  padding: 8px;
  font-weight: 700;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
