import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  </React.StrictMode>,
)
