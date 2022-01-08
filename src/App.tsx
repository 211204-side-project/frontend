import React, { useEffect, useState } from 'react'
import Navigators from './pages/Navigators'
import Routers from './routes/Routers'
import { getUserSelf } from './API/user'
import { setUserInformation } from './redux/modules/user/set'
import { useDispatch } from 'react-redux'

const App = () => {
  const [IsLogin, setIsLogin] = useState<boolean>(false)

  const modalClose = (): void => {
    setIsLogin(!IsLogin)
  }

  const dispatch = useDispatch()

  const user = async () => {
    const { status, data } = await getUserSelf()
    if (status)
      dispatch(
        setUserInformation({
          me: {
            accountId: data.object.accountId,
            nickname: data.object.nickname,
            phoneNumber: data.object.phoneNumber,
            userImgUrl: data.object.userImgUrl ?? null,
          },
        }),
      )
  }

  useEffect(() => {
    user()
  }, [])

  return (
    <section>
      <Navigators modalClose={modalClose} IsLogin={IsLogin} />
      <Routers />
    </section>
  )
}

export default App
