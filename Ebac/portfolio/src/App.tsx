import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import GlobalStyle, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [tema, setTema] = useState(false)

  function trocaTema() {
    setTema(!tema)
  }

  return (
    <ThemeProvider theme={tema ? temaDark : temaLight}>
      <GlobalStyle />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
