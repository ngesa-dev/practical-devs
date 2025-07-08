// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import FAQs from './pages/FAQs';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages wrapped with MainLayout (with Navbar & Footer) */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <MainLayout>
              <Courses />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />
        <Route
          path="/faqs"
          element={
            <MainLayout>
              <FAQs />
            </MainLayout>
          }
        />

        {/* Auth pages - no layout (optional) */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
