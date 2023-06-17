import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Test from './HR_TableTest'
import HR_ExpTest from './HR_TableExpandTest';
import Table from 'Components/HR_freezetable';
 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Table/>} />
      </Routes>
    </Router>
  );
}
