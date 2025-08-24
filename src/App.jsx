
import Home from './pages/Home';
import About from './pages/About';
import { Link, Route, Routes } from 'react-router';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
export default function App() {
  return (
    <div>
      {/* Logic routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}