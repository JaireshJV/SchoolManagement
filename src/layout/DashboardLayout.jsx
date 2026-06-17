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
import logoFull from "../assets/images/LogoWithName.png";
import logoSmall from "../assets/images/EduProLogo.png";
import { FcGraduationCap } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { logOut } from "@modules/Auth/authSlice";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem("openKeys");
    localStorage.removeItem("persist");
    removeSelectedCompanyId();
    window.location.href = "/signin";
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
            {/* <div className="logo-full"> */}
            <img src={logoFull} alt="Edu Pro" className="logo-full" />
            {/* <h4>EduPro</h4>
              <p>Institute ERP</p> */}
            {/* </div> */}

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
                  <div className="emoji-collapsed">🏠 </div>

                  {(!collapsed || hovered) && <span>Dashboard</span>}
                </div>
              </li>

              {/* <hr className="section-divider" /> */}

              {/* Students */}
              {(!collapsed || hovered) && (
                <li className="section-label">STUDENTS</li>
              )}

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/students" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/students")}
                >
                  <div className="emoji-collapsed">🎓 </div>

                  {(!collapsed || hovered) && <span>Students</span>}
                </div>
              </li>

              {/* Parents */}
              {/* <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/parents" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/parents")}
                >
                  <div className="emoji-collapsed">👨‍👩‍👧</div>

                <div>{(!collapsed || hovered) && <span>Parents</span>}</div>
                </div>
              </li> */}

              {/* Staff */}

              {(!collapsed || hovered) && (
                <li className="section-label">STAFF</li>
              )}

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/teachers" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/teachers")}
                >
                  <div className="emoji-collapsed">👨‍🏫 </div>

                  {(!collapsed || hovered) && <span>Teachers</span>}
                </div>
              </li>

              {/* Acedemic */}

              {(!collapsed || hovered) && (
                <li className="section-label">ACADEMIC</li>
              )}

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/courseManagement" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/courseManagement")}
                >
                  <div className="emoji-collapsed">🗃️</div>

                  {(!collapsed || hovered) && <span>Courses</span>}
                </div>
              </li>

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/batches" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/batches")}
                >
                  <div className="emoji-collapsed">🗂️ </div>

                  {(!collapsed || hovered) && <span>Batches</span>}
                </div>
              </li>

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/subjects" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/subjects")}
                >
                  <div className="emoji-collapsed">📚 </div>

                  {(!collapsed || hovered) && <span>Subjects</span>}
                </div>
              </li>

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/chapters" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/chapters")}
                >
                  <div className="emoji-collapsed">📖 </div>

                  {(!collapsed || hovered) && <span>Chapters</span>}
                </div>
              </li>

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/topics" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/topics")}
                >
                  <div className="emoji-collapsed">📌 </div>

                  {(!collapsed || hovered) && <span>Topics</span>}
                </div>
              </li>

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/franchise" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/franchise")}
                >
                  <div className="emoji-collapsed">🤝 </div>

                  {(!collapsed || hovered) && <span>Franchise</span>}
                </div>
              </li>

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/classSchedule" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/classSchedule")}
                >
                  <div className="emoji-collapsed">📅 </div>

                  {(!collapsed || hovered) && <span>Schedule</span>}
                </div>
              </li>

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/videoManager" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/videoManager")}
                >
                  <div className="emoji-collapsed">📹 </div>

                  {(!collapsed || hovered) && <span>Recorded Videos</span>}
                </div>
              </li>

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/studyMaterial" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/studyMaterial")}
                >
                  <div className="emoji-collapsed">📁 </div>

                  {(!collapsed || hovered) && <span>Study Material</span>}
                </div>
              </li>

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/question" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/question")}
                >
                  <div className="emoji-collapsed">? </div>

                  {(!collapsed || hovered) && <span>Question Bank</span>}
                </div>
              </li>

              {/* Tracking */}

              {(!collapsed || hovered) && (
                <li className="section-label">TRACKING</li>
              )}

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/attendance" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/attendance")}
                >
                  <div className="emoji-collapsed">✅ </div>
                  {(!collapsed || hovered) && <span>Attendance</span>}
                </div>
              </li>

              {/* <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/Marks" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/marks")}
                >
                    <div className="emoji-collapsed">📊 </div>
                  {(!collapsed || hovered) && <span>Marks</span>}
                </div>
              </li> */}

              {/* Finance */}

              {(!collapsed || hovered) && (
                <li className="section-label">FINANCE</li>
              )}

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/feeManagement" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/feeManagement")}
                >
                  <div className="emoji-collapsed">💳 </div>

                  {(!collapsed || hovered) && <span>Fee Management</span>}
                </div>
              </li>

              {/* Test */}

              {(!collapsed || hovered) && (
                <li className="section-label">EXAM</li>
              )}

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/exams" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/exams")}
                >
                  <div className="emoji-collapsed">⏳</div>

                  {(!collapsed || hovered) && <span>Exams</span>}
                </div>
              </li>

              {/* System */}

              {(!collapsed || hovered) && (
                <li className="section-label">SYSTEM</li>
              )}

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/reports" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/reports")}
                >
                  <div className="emoji-collapsed">📈 </div>

                  {(!collapsed || hovered) && <span>Reports</span>}
                </div>
              </li>

              <li>
                <div
                  className={`sidebar-link ${
                    location.pathname === "/profile" ? "active" : ""
                  }`}
                  onClick={() => handleNavigate("/profile")}
                >
                  <div className="emoji-collapsed">⚙️ </div>
                  {(!collapsed || hovered) && <span>Settings</span>}
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="logout-section" onClick={handleLogOut}>
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
