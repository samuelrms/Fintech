import { Container } from './App.styles'
import { Header, Sidenav } from './Components'
import { Routes, Route } from 'react-router-dom'
import { Sale } from './Pages'
import { appRoutes } from './mocks'

function App() {
  return (
    <Container>
      <Sidenav />
      <main>
        <Header />
        <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.title}
              path={route.path}
              element={route?.component?.()}
            />
          ))}
          <Route path="/vendas/:id" element={<Sale />} />
        </Routes>
      </main>
    </Container>
  )
}

export default App
