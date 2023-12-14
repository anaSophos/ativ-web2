import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
