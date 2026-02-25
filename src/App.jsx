
import Home from './pages/Home';
import About from './pages/About';
import { Link, Route, Routes } from 'react-router';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Custom from './pages/Custom';
import ProtectedRoute from './components/ProtectedRoute';
export default function App() {
  return (
    <div>
      {/* Logic routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/custom/:token" element={
          <ProtectedRoute>
            <Custom />
          </ProtectedRoute>
        } />
        <Route path='/yamin' element={
           <div>
            <h1 className='text-3xl text-center font-bold'>Yamin Kontol! Hahahahaha</h1>
          </div>
        } />
      </Routes>
    </div>
  );
}