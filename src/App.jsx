import React from 'react'
import LoginPage from './LoginPage'
import Dashboard from './Dashboard'
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App