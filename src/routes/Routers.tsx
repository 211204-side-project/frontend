import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFoundPage from '../pages/404'
import Profile from '../pages/Profile'
import { ACCESS_TOKEN } from '../common/constants/successOrFalse.constants'

const Routers = () => {
  const token = localStorage.getItem(ACCESS_TOKEN)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {token ? (
        <Route path="/me/:nickname" element={<Profile />} />
      ) : (
        <Route path="*" element={<NotFoundPage />} />
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Routers
