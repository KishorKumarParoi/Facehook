import { Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, NotFoundPage, ProfilePage, RegistrationPage } from './components/pages';
import PrivateRoutes from './routes/PrivateRoutes';

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/home" element={<HomePage />} />
        <Route path="/me" element={<ProfilePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}