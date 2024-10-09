import { Routes, Route } from "react-router-dom"

import SignIn from "./components/sign-in/SignIn"
import SignUp from "./components/sign-up/SignUp"

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  )
}

export default App
