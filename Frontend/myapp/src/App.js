import React from 'react'
import FrontPage from "./Component/Frontpage"
import {Routes,Route} from "react-router-dom"
import AddColie from './Component/AddColie'
const App = () => {

 
  return (
    <>
    <Routes>
    <Route path="/addcollie" element={<AddColie></AddColie>}></Route>
    <Route path="/" element={<FrontPage></FrontPage>}></Route>
  </Routes>

   
    <div></div>
    </>
  )
}

export default App

