import React, { useState } from 'react'
import HomePopUp from './views/HomePopUp'

const MainModalContainer = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(true)

  const modalClose = (): void => {
    setModalOpen(!modalOpen)
  }

  return <section>{modalOpen && <HomePopUp modalClose={modalClose} />}</section>
}

export default MainModalContainer
