import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import User from './pages/User.jsx'
import Budget from './pages/Budget.jsx'

//https://reactrouter.com/6.28.2/routers/create-browser-router
const router = createBrowserRouter([
  {
    path:'/',
    element: <Dashboard/>,
    errorElement:<div>404 not found</div>
  }, 
  {
    path:'/account',
    element: <User/>,
    errorElement:<div>404 not found</div>
  },
  {
    path:'/budget',
    element:<Budget/>,
    errorElement:<div>404 not found</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
