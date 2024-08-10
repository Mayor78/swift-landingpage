import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Track from './components/Track.jsx'


// This is a simple example of a React component
const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
     children: [
      // { index: true, element: <Home /> },
      

    ],
    
  }
])
 








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
