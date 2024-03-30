import './App.css'
import Header from "./component/Header/Header"
import Footer from "./component/Footer"
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
      <div>
        <Header />
        <div className='min-h-screen'>

          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
