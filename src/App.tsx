import React, { useState } from 'react'
import Navigators from './pages/Navigators'
import Routers from './routes/Routers'

const App = () => {
  const [IsLogin, setIsLogin] = useState<boolean>(false)

  const modalClose = (): void => {
    setIsLogin(!IsLogin)
  }

  return (
    <section>
      <Navigators modalClose={modalClose} IsLogin={IsLogin} />
      <Routers />
    </section>
  )
}

export default App
