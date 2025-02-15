import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/app/App.tsx'
import BlogRoute from './routes/blog/Blog.route.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/blog/:id",
    element:<BlogRoute/>
  }
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
