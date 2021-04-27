import Todos from "./components/Todos"
import { useState, useEffect } from "react"
import DarkMode from ("./components/DarkMode")

function App() {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)
  const modeClasses = dark ? "bg dark text-white min-vh-100" : "bg-light"
  return (
    <div className="container my-4">
      <h1 className="text-center">ToDos App</h1>
      <Todos />
    </div>
  )
}

export default App
