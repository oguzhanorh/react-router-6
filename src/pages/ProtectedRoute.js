import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;

//ProtectedRoute oluşturma amacımız giriş yaptıktan sonra sayfa yenilense bile aynı isim yazıyor onun önüne geçmek için oluşturuyoruz.
