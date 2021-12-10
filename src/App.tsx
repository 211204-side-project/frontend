import Routers from './routes/Routers'
import Navigators from './pages/Navigators'

const App = () => {
  return (
    <section>
      <header>
        <Navigators />
      </header>
      <main>
        <Routers />
      </main>
    </section>
  )
}

export default App
