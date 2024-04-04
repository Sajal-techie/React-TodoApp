import React from 'react'
import {Routes, Route, } from 'react-router-dom'
import Todo from './Todo'
import Notfound from './Notfound'
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Todo/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </div>
  )
}

export default Router
