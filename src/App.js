import './style.scss'
import Login from './app/Login'
import Signup from './app/Signup';
import Dashboard from './app/Dashboard'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from "./context/AuthContext";


function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) =>{
    if(!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element= {
              <ProtectedRoute>
                <Dashboard /> 
              </ProtectedRoute> } />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
