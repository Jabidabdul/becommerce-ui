import React from "react";
import "./sidebar.css";
import { mainMenus,workspace,general } from "../../utils";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="mainMenus">
        <h6>MAIN MENU</h6>
        {mainMenus.map((menu) => (
          <button key={menu.id}>
            <span>{menu.icon}</span>
            <span>{menu.name}</span>
          </button>
        ))}
      </div>
      <div className="workSpace">
        <h6>Workspace</h6>
        {workspace.map((workspace) => (
          <button key={workspace.id}>
            <span>{workspace.icon}</span>
            <span>{workspace.name}</span>
          </button>
        ))}

      </div>
      <div className="general">
        <h6>General</h6>
        {general.map((general) => (
          <button key={general.id}>
            <span>{general.icon}</span>
            <span>{general.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
