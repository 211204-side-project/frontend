import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import NotFoundPage from '../pages/404'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Routers
