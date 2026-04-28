import React, { useEffect, useState } from "react";
import { ImageProfile, NavTopDraw } from "./Style";
import { RiMenu4Line } from "react-icons/ri";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Popover, Button, Space, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CustomModal, Flex } from "@components/others";
import { logOut, selectCurrentId, selectCurrentRoleName, selectCurrentUser, setProfile } from "@modules/Auth/authSlice";
import { SvgIcons } from "@assets/images";
import CustomPopconfirm from "@components/others/CustomPopConfirm";
import { baseRequest, IMG_BASE_URL } from "@request/request";
import { userRolesConfig } from "@router/config/roles";
import { removeSelectedCompanyId } from "@utils/cryptoUtils";
import { useFetchImageAsBase64 } from "@utils/fetchImageAsBase64";

export const useUserDetails = (userId) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(false);

  const RoleName = useSelector(selectCurrentRoleName); // role Name

  useEffect(() => {
    if (!userId) return;

    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await baseRequest.get(`user/admin/details?user=adminDetail`);
        const findUsername = response.data && response.data?.find(item => item?.id === Number(userId));

        setUserDetails(findUsername);
        setTrigger(true);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (RoleName === userRolesConfig.ADMIN || RoleName === userRolesConfig.SUPERADMIN) {
      fetchUserDetails();
    }
  }, [userId]);

  return {
    userDetails,
    loading,
    error,
    trigger,
    refetch: () => {
      if (userId) {
        setTrigger(false);
        setUserDetails(null);
      }
    }
  };
};

export const NavHeader = ({ showDrawer, collapsed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ======  Modal Open ========
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  // ======  Modal Title and Content ========
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const SideProfile = useSelector(setProfile);
  const profile = useSelector(selectCurrentUser);
  const UserId = useSelector(selectCurrentId);
  const RoleName = useSelector(selectCurrentRoleName);
  const { fetchImageAsBase64 } = useFetchImageAsBase64();

  // Use the custom hook
  const { userDetails, loading, error, trigger } = useUserDetails(UserId);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const Signout = () => {
    dispatch(logOut());
    localStorage.removeItem("openKeys");
    localStorage.removeItem('persist');
    removeSelectedCompanyId();
    window.location.href = "/signin";
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  // const ViewNotification = () => {
  //   setModalTitle("Notifications");
  //   showModal();
  // };

  const handleLogoutConfirm = () => {
    Signout();
  };

  const handleLogoutCancel = () => {
    setConfirmVisible(false);
  };

  const handleProfileClick = () => {
    navigate(`/admin/profile/edit`);
    setPopoverVisible(false);
  };

  const profileContent = (
    <div style={{ minWidth: '160px'}}>
      <CustomPopconfirm
        placement="bottom"
        description="Are you sure you want to log out?"
        visible={confirmVisible}
        confirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
        okText="Log out"
        cancelText="Cancel"
      >
        <Button
          type="text"
          icon={<FiLogOut size={16} />}
          style={{
            width: '100%',
            textAlign: 'left',
            color: '#EA1B25',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            height: 'auto'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#fff2f0';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Log Out
        </Button>
      </CustomPopconfirm>
    </div>
  );
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const baseURL = IMG_BASE_URL;
      const path = SideProfile;
      const base64Image = await fetchImageAsBase64(baseURL + path);
      setImageSrc(base64Image);
    };
    fetchImage();
  }, []);


  return (
    <NavTopDraw >
      <Flex spacebetween={"true"} aligncenter={"true"} H_100={"true"}>
        {collapsed ? (
          <img
            className="logo"
            style={{ marginLeft: "-35px" }}
            width={"191px"}
            height={"70px"}
            src={SvgIcons.Logo}
            alt="Profile"
          />
        ) : null}
        <span className="DrawBtn" onClick={showDrawer}>
          <RiMenu4Line style={{ fontSize: "20px" }} />
        </span>
        <div className="Btnresponsive">
          <Popover
            content={profileContent}
            trigger="click"
            placement="bottomRight"
            open={popoverVisible}
            onOpenChange={setPopoverVisible}
            overlayStyle={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              borderRadius: '8px',
            }}
          >
            <div >
              <ImageProfile >
                <img src={imageSrc} alt="Profile" style={{ cursor: 'pointer',background:"#96da94ff",borderRadius:"50%" ,boxShadow: '0 1px 10px #f5e607'}}/>
                <h2
                  style={{
                    transition: "0.5s",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: "1.3",
                    textTransform: "capitalize",
                    color: "#216020"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;{userDetails ? userDetails?.userNmae : profile}
                </h2>
              </ImageProfile>
            </div>
          </Popover>
        </div>
      </Flex>

      <CustomModal
        isVisible={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        width={400}
        modalTitle={modalTitle}
        modalContent={modalContent}
      />
    </NavTopDraw>
  );
};