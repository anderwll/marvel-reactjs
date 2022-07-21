import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutDefault from '../config/layout/Default'
import CharactersPage from '../pages/characters/Characters'
import ComicsPage from '../pages/comics/Comics'
import HomePage from '../pages/home/Home'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />} />
        <Route path="/characters" element={<LayoutDefault />} />
        <Route path="/comics" element={<LayoutDefault />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
