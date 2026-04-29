import { useState, useEffect } from "react";
import {
  HomeOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  ShopOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";
import { IoIosArrowDown } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderSection } from "./Header";
import logoFull from "../assets/images/EduProLogo.png";
import logoSmall from "../assets/images/EduProLogo.png";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ FIXED
  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const handleMouseEnter = () => {
    if (collapsed && !mobileOpen) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (collapsed && !mobileOpen) setHovered(false);
  };

  // ✅ CENTRAL NAVIGATION (like second code)
  const handleNavigate = (path) => {
    navigate(path);
    if (window.innerWidth <= 768) {
      setMobileOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setCollapsed(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`layout 
        ${collapsed ? "collapsed" : ""} 
        ${hovered ? "hovered" : ""}`}
    >
      {/* Sidebar */}
      <aside
        className={`sidebar 
          ${collapsed ? "sidebar-collapsed" : ""} 
          ${hovered ? "sidebar-hovered" : ""} 
          ${mobileOpen ? "sidebar-mobile-open" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="sidebar-header">
          <div className="logo">
            {/* Full logo (visible when expanded or hovered) */}
            <div className="logo-full">
            <img src={logoFull} alt="Edu Pro"  />
            <h4>EduPro</h4>
            <p>Institute ERP</p>
            </div>

            {/* Small logo (visible when collapsed) */}
            <img src={logoSmall} alt="Edu Pro" className="logo-small" />
          </div>

          <button className="toggle-btn desktop-toggle" onClick={toggleSidebar}>
            {collapsed || mobileOpen ? (
              <MenuUnfoldOutlined />
            ) : (
              <MenuFoldOutlined />
            )}
          </button>
        </div>

        <div className="sidebar-body">
          <nav className="sidebar-menu">
            <ul>
              {/* Admin */}
              {(!collapsed || hovered) && <li className="section-label"></li>}

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/")}
                >
                  <HomeOutlined />
                  {(!collapsed || hovered) && <span>Dashboard</span>}
                </div>
              </li>

              <hr className="section-divider" />

              {/* Vendor */}
              {(!collapsed || hovered) && (
                <li className="section-label">STUDENTS</li>
              )}

              <li
                className={`dropdown-item ${
                  openDropdown === "vendor" ? "open" : ""
                }`}
              >
                <div
                  className={`dropdown-header ${
                    openDropdown === "vendor" ? "active" : ""
                  }`}
                  onClick={() => toggleDropdown("vendor")}
                >
                  <div className="dropdown-left">
                    <ShopOutlined />
                    {(!collapsed || hovered) && <span>Vendor Purchases</span>}
                  </div>

                  {(!collapsed || hovered) && (
                    <div className="toggle-icon-wrap">
                      {openDropdown === "vendor" ? (
                        <IoIosArrowDown />
                      ) : (
                        <MdChevronRight />
                      )}
                    </div>
                  )}
                </div>

                {(!collapsed || hovered) && openDropdown === "vendor" && (
                  <ul className="dropdown-list">
                    <li
                      className="sub-item"
                      onClick={() => handleNavigate("/courseManagement")}
                    >
                      Vendor Purchases
                    </li>
                    <li
                      className="sub-item"
                      onClick={() => handleNavigate("/vendor-purchase-order")}
                    >
                      Purchases Orders
                    </li>
                    <li
                      className="sub-item"
                      onClick={() => handleNavigate("/vendor-purchase-returns")}
                    >
                      Purchases Returns
                    </li>
                  </ul>
                )}
              </li>

              <hr className="section-divider" />

              {/* Users */}
              {(!collapsed || hovered) && (
                <li className="section-label">Users</li>
              )}

              <li
                className={`dropdown-item ${
                  openDropdown === "users" ? "open" : ""
                }`}
              >
                <div
                  className="dropdown-header"
                  onClick={() => toggleDropdown("users")}
                >
                  <div className="dropdown-left">
                    <UserOutlined />
                    {(!collapsed || hovered) && <span>Users</span>}
                  </div>

                  {(!collapsed || hovered) && (
                    <div className="toggle-icon-wrap">
                      {openDropdown === "users" ? (
                        <IoIosArrowDown />
                      ) : (
                        <MdChevronRight />
                      )}
                    </div>
                  )}
                </div>

                {(!collapsed || hovered) && openDropdown === "users" && (
                  <ul className="dropdown-list">
                    <li className="sub-item">All Users</li>
                    <li className="sub-item">Add New</li>
                    <li className="sub-item">User Roles</li>
                  </ul>
                )}
              </li>

              <hr className="section-divider" />

              {/* Settings */}
              {(!collapsed || hovered) && (
                <li className="section-label">Settings</li>
              )}

              <li
                className={`dropdown-item ${
                  openDropdown === "generalsettings" ? "open" : ""
                }`}
              >
                <div
                  className="dropdown-header"
                  onClick={() => toggleDropdown("generalsettings")}
                >
                  <div className="dropdown-left">
                    <SettingOutlined />
                    {(!collapsed || hovered) && <span>General Settings</span>}
                  </div>

                  {(!collapsed || hovered) && (
                    <div className="toggle-icon-wrap">
                      {openDropdown === "generalsettings" ? (
                        <IoIosArrowDown />
                      ) : (
                        <MdChevronRight />
                      )}
                    </div>
                  )}
                </div>

                {(!collapsed || hovered) &&
                  openDropdown === "generalsettings" && (
                    <ul className="dropdown-list">
                      <li
                        className="sub-item"
                        onClick={() => handleNavigate("/profilesetting")}
                      >
                        Profile
                      </li>
                      <li
                        className="sub-item"
                        onClick={() => handleNavigate("/securitysetting")}
                      >
                        Security
                      </li>
                      <li
                        className="sub-item"
                        onClick={() => handleNavigate("/notification")}
                      >
                        Notification
                      </li>
                    </ul>
                  )}
              </li>

              <hr className="section-divider" />
            </ul>
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="logout-section" onClick={handleLogout}>
            <LogoutOutlined />
            {(!collapsed || hovered) && <span>Logout</span>}
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* Main */}
      <div className="main-content">
        <HeaderSection toggleSidebar={toggleSidebar} mobileOpen={mobileOpen} />

        <div className="content-body">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
