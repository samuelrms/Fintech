import { Header, Sidenav } from './Components'
import { Resume } from './Pages'

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
      </main>
      <Resume />
    </div>
  )
}

export default App
