import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github, { githubInfoLoader } from './Components/Github/Github'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route
      loader={githubInfoLoader}
      path='/Github' 
      element={<Github/>} 
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>
)
