import React from 'react';
import SignUp from './components/signUp/SignUp';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import UpdateProfile from './components/updateProfile/UpdateProfile';


function App() {

  return (
        <Router>
          <AuthProvider>
          
            <Routes>
              <Route exact path='/' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
              }
              />

              <Route path='/update-profile' element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
              }
              />

              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />

            </Routes>
          </AuthProvider>
        </Router>
  );
}

export default App;
