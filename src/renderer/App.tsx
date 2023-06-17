import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Test from './HR_TableTest'
import HR_ExpTest from './HR_TableExpandTest';
 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< HR_ExpTest />} />
      </Routes>
    </Router>
  );
}
