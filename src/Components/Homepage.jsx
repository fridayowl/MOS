
import SideBar from './SideBar';
import HR_ExpTest from 'renderer/HR_TableExpandTest';
import TopBar  from  'Components/TopBar'


const  Homepage =()  =>{
const sidebarData = [
    { icon: '📂', label: 'Reports' },
    { icon: '📊', label: 'Analytics' },
    { icon: '📁', label: 'Data Sources' },
    { icon: '🔧', label: 'Settings' },
  ];


return (
  <div style={{ display: 'flex' }}>
    <SideBar data={sidebarData} />
    <div style={{ flex: '1' }}>
      <TopBar />
      <div style={{ marginTop: '64px' }}>
        {/* Content goes here */}
        <HR_ExpTest />
      </div>
    </div>
  </div>
);



}



export default Homepage;