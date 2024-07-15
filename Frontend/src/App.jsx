import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './Component/Login';
import RegisterPage from './Component/SignUp';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './Component/Landing';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );

  function Appbar() {
    const navigate = useNavigate();
    return (
      <div className="container-fluid my-2">
        <div className="row justify-content-between border align-items-center">
          <div className="col-lg-4 mt-3 mb-3">
            <img src="./Image/Logo.png" alt="Logo" style={{height:"25px"}} />
          </div>
          <div className="col-lg-4 d-flex justify-content-end mt-3 mb-3">
            <button className="btn btn-outline-dark btn-lg me-4 p-1" onClick={() => navigate("/")}>Home</button>
            <button className="btn btn-outline-dark btn-lg me-4 p-1" onClick={() => navigate("/Login")}>Login</button>
            <button className="btn btn-outline-dark btn-lg me-4 p-1" onClick={() => navigate("/Register")}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
