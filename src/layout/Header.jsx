import { FiSettings } from "react-icons/fi";
import "./Header.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiLogoutCircleRLine, RiSettingsLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import logoFull from "../assets/images/EduProLogo.png"
import { logOut, selectCurrentRoleName, selectCurrentUser } from "@modules/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const HeaderSection = ({
  toggleSidebar,
  mobileOpen,
}) => {
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const dispatch = useDispatch() ;
  const userName = useSelector(selectCurrentUser) ;
  const roleName = useSelector(selectCurrentRoleName) ;


  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;

      if (
        !notificationRef.current?.contains(target) &&
        !profileRef.current?.contains(target) &&
        !mobileMenuRef.current?.contains(target)
      ) {
        setShowNotifications(false);
        setShowProfileMenu(false);
        setShowMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSettingClick = () => {
    navigate("/profilesetting");
  };

  const handleViewNotification = () => {
    navigate("/activities");
  };

  const handleLogOut =()=>{
    dispatch(logOut());
    localStorage.removeItem("openKeys");
    localStorage.removeItem('persist');
    removeSelectedCompanyId();
    window.location.href = "/signin";
  }

  return (
    <header className={`main-header ${mobileOpen ? "menu-opened" : ""}`}>
      <button className="mobile-toggle" onClick={toggleSidebar}>
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <span className="header-title"></span>
      <div
        className="header-logo-mobile"
        onClick={() => navigate("/dashboard")}
      >
        <img src={logoFull} alt="EduPro" />
      </div>

{/* HEADER ACTIONS */}
      <div className="header-actions">
        {/* 🔔 Notifications */}
        <div className="header-icon notification" ref={notificationRef}>
          <IoNotificationsOutline
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
              setShowMobileMenu(false);
            }}
          />
          {showNotifications && (
            <div className="notification-modal">
              <h4>
                Notifications <span>Mark all as read</span>
              </h4>
              <ul>
                <li>Invoice INV01 has been approved</li>
                <li>New Client added: Cedri</li>
                <li>Service reminder: Follow-up due</li>
              </ul>
              <div className="notification-footer">
                <button onClick={() => setShowNotifications(false)}>
                  Cancel
                </button>
                <button onClick={handleViewNotification}>View All</button>
              </div>
            </div>
          )}
        </div>

        {/* ⚙️ Settings */}
        <div className="header-icon setting" onClick={handleSettingClick}>
          <FiSettings />
        </div>

        {/* 👤 Profile */}
        <div className="profile" ref={profileRef}>
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="profile-img"
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
              setShowMobileMenu(false);
            }}
          />
          {showProfileMenu && (
            <div className="profile-dropdown">
              <div className="profile-header">
                <img
                  src="https://i.pravatar.cc/80"
                  alt="profile"
                  className="dropdown-img"
                />
                <div>
                  <h4>{userName}</h4>
                  <span>{roleName}</span>
                </div>
              </div>

              <ul className="profile-links">
                <li onClick={() => navigate("/my-profile")}>
                  <CgProfile /> My Profile
                </li>
                <li onClick={() => navigate("/reports")}>
                  <HiOutlineDocumentText /> Reports
                </li>
                <li onClick={() => navigate("/profilesetting")}>
                  <RiSettingsLine /> Settings
                </li>

                <li onClick={handleLogOut} style={{background:"green",color:"gold"}}>
                  <RiLogoutCircleRLine /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* 📱 Mobile Menu */}
        <div className="mobile-menu" ref={mobileMenuRef}>
          <BsThreeDotsVertical
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setShowProfileMenu(false);
              setShowNotifications(false);
            }}
            className="three-dots-icon"
          />
          {showMobileMenu && (
            <div className="mobile-dropdown">
              <ul>
                <li onClick={() => navigate("/my-profile")}>My Profile</li>
                <li onClick={() => navigate("/settings")}>Settings</li>
                <li onClick={handleLogOut}>
                  <RiLogoutCircleRLine /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>

  );
};
