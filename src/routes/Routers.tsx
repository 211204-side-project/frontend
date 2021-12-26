import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFoundPage from '../pages/404'
import UserController from '../pages/UserController'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/usercontoller" element={<UserController />} />
    </Routes>
  )
}

export default Routers
