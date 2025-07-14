import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/auth/Login.tsx'
import Signup from './routes/auth/Signup.tsx'
import ProtectedRoutes from './utils/ProtectedRoutes.tsx'
import HomePage from './routes/HomePage.tsx'
import ExamsPage from './routes/ExamsPage.tsx'



const router = createBrowserRouter([
  {
    path: "",
    element: <ProtectedRoutes />,
    children :[
       {
        path : "/",
        element : <HomePage/>
      },
      {
        path : "/exams",
        element : <ExamsPage/>
      },
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
