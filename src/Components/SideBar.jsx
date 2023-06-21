import {React,useState } from 'react';
import './sidebar.css';
import './style.css';

const SideBar = ({ data }) => {
 const [collapsed, setCollapsed] = useState(false);
 const [activeItem, setActiveItem] = useState(null);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleItemClick = (itemIndex) => {
    setActiveItem(itemIndex);
  };

  const renderSidebarItems = () => {
    if (collapsed) {
      return data.map((item, index) => (
        <div
          key={index}
          className={`sidebar-item ${activeItem === index ? 'active' : ''}`}
          onClick={() => handleItemClick(index)}
        >
          <span className="sidebar-icon">{item.icon}</span>
        </div>
      ));
    } else {
      return data.map((item, index) => (
        <div
          key={index}
          className={`sidebar-item ${activeItem === index ? 'active' : ''}`}
          onClick={() => handleItemClick(index)}
        >
          <span className="sidebar-icon">{item.icon}</span>
          <span className="sidebar-label">{item.label}</span>
        </div>
      ));
    }
  };

  return (
    <div className={`sidebar-container ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar">
        <div className="sidebar-top">
          {!collapsed && (
            <div className="sidebar-name">
              <span>Name</span>
            </div>
          )}
          <div className="sidebar-toggle">
            <button onClick={toggleCollapse}>{collapsed ? '☰' : '✕'}</button>
          </div>
        </div>
        <div className="sidebar-items">{renderSidebarItems()}</div>
      </div>
    </div>
  );
};

export default SideBar;
