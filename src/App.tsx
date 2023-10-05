import { Container } from './App.styles'
import { Header, Sidenav } from './Components'
import { DataContextProvider } from './Context'
import { Resume } from './Pages'

function App() {
  return (
    <Container>
      <DataContextProvider>
        <main>
          <Sidenav />
          <Header />
          <Resume />
        </main>
      </DataContextProvider>
    </Container>
  )
}

export default App
