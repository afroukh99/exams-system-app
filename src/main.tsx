import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/auth/Auth.tsx'
import Signup from './routes/auth/Signup.tsx'
import ProtectedRoutes from './utils/ProtectedRoutes.tsx'
import HomePage from './routes/HomePage.tsx'
import NotFound from './routes/NotFound.tsx'
import TeacherDashboard from './routes/TeacherDashboard.tsx'
import StudentEntry from './routes/StudentEntry.tsx'
import Exam from './routes/Exam.tsx'
import Auth from './routes/auth/Auth.tsx'



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
        path : "/teacher",
        element : <TeacherDashboard/>
      },
      {
        path : "exam/:examId",
        children : [
          {
            path : "",
            element : <StudentEntry/>
          },
          {
            path : ":take",
            element : <Exam/>
          }
        ]
      }   
    ]
  }
  ,
  {
    path: "/auth",
    element : <Auth/>
  },
  {
    path : "*",
    element : <NotFound/>
  }
])




createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
) 
