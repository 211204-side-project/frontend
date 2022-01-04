import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFoundPage from '../pages/404'
import Profile from '../pages/Profile'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/me/:nickname" element={<Profile />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Routers
