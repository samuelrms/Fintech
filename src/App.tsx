import { Header, Sidenav } from './Components'
import { DataContextProvider } from './Context'
import { Resume } from './Pages'

function App() {
  return (
    <DataContextProvider>
      <Sidenav />
      <main>
        <Header />
      </main>
      <Resume />
    </DataContextProvider>
  )
}

export default App
