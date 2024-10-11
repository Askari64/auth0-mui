import { Routes, Route } from "react-router-dom"

import SignIn from "./components/Sign-in/Signin"
import SignUp from "./components/sign-up/SignUp"
import Callback from "../utility/Callback"

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/callback" element={<Callback />} />
    </Routes>
  )
}

export default App
