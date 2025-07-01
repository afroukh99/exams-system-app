import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="">
      <header>Header</header>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  )
}

export default App
