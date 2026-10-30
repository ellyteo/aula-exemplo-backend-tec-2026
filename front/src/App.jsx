import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Users from './pages/Users'
import PrivateRoute from './Routes/PrivateRoute'
import SignIn from './pages/SignIn'

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/users' element={<Users />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        </Routes>
      <Footer />

    </>
  )
}

export default App
