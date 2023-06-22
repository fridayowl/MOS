import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Test from './HR_TableTest'
import HR_ExpTest from './HR_TableExpandTest';
import Table from 'Components/HR_freezetable';
 import Table1 from 'Components/HR_collapse';
 import DatePickerButton from 'Components/Datepicker'
 import TextEditor from 'Components/TextEditor' 
 import SideBar from 'Components/SideBar'
 import Homepage from  'Components/Homepage'

export default function App() {
  const sidebarData = [
    { icon: '📂', label: 'Reports' },
    { icon: '📊', label: 'Analytics' },
    { icon: '📁', label: 'Data Sources' },
    { icon: '🔧', label: 'Settings' },
  ];

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={ <SideBar data={sidebarData} />} /> */}
        {/* <Route path="/" element={ <HR_ExpTest/>} /> */}
        <Route path="/" element={ <Table/>} />
      </Routes>
    </Router>
  );
}
