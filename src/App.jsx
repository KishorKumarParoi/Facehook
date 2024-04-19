import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import ProfilePage from './components/ProfilePage';
import RegistrationPage from './components/RegistrationPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/me" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}