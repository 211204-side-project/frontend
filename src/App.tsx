import Navigators from './pages/Navigators'
import Routers from './routes/Routers'

const App = () => {
  return (
    <section>
      <header>
        <Navigators />
      </header>
      <main>
        <Routers />
      </main>
      <footer></footer>
    </section>
  )
}

export default App
