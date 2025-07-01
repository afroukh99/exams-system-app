import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import Exams from './pages/Exams.tsx'
import ProtectedRoutes from './utilities/ProtectedRoutes.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children :[
      {
        path : "/exams",
        element : <Exams/>
      }
    ]
  }
  ,
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
])




createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
) 
