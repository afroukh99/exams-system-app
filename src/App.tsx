import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

  return (
    <div className="">
      <Header/>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  )
}

export default App
