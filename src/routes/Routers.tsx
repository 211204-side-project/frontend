import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFoundPage from '../pages/404'
import UserController from '../pages/UserController'
import Profile from '../pages/Profile'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/me/:nickname" element={<Profile />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/usercontoller" element={<UserController />} />
    </Routes>
  )
}

export default Routers
