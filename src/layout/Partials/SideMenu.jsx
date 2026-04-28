import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { adminItems, adminKeys } from "@layout/Partials/DynamicSubmenu/Admin";
import { MenuHolder, MenuImageProfile, Profile } from "@layout/Partials/Style";
import { useSelector } from "react-redux";
import {
  selectCurrentId,
  selectCurrentRoleName,
  selectCurrentUser,
  selectCurrentUserRole,
  setProfile,
} from "@modules/Auth/authSlice";
import { userRolesConfig } from "@router/config/roles";
import { managerItems, managerkeys } from "./DynamicSubmenu/Manager";
import { IMG_BASE_URL } from "@request/request";
import { useUserDetails } from "./NavHeader";
import { marketingItems, marketingkeys } from "./DynamicSubmenu/Marketing";
import { regionalManagerItems, regionalManagerkeys } from "./DynamicSubmenu/RegionalManager";
import { hrItems, hrKeys } from "./DynamicSubmenu/HR";
import { onlineMarketingItems, onlineMarketingkeys } from "./DynamicSubmenu/OnlineMarketing";
import { logisticsItems, logisticskeys } from "./DynamicSubmenu/Logistics";
import { useFetchImageAsBase64 } from "@utils/fetchImageAsBase64";


export const SideMenu = ({ collapsed, drawerModal }) => {
  const [openKeys, setOpenKeys] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  // ==========  Dynamic Items & Keys
  const [dynamicKeys, setDynamicKeys] = useState([]);
  const [items, setItems] = useState([]);

  const navigate = useNavigate();
  const route = useLocation();
  const role = useSelector(selectCurrentUserRole); // role Type

  const RoleName = useSelector(selectCurrentRoleName); // role Name

  const UserName = useSelector(selectCurrentUser); //  user Name

  const SideProfile = useSelector(setProfile); // profile       
  const UserId = useSelector(selectCurrentId);
  const { userDetails } = useUserDetails(UserId);

  useEffect(() => {
    if (RoleName === userRolesConfig.ADMIN) {
      setDynamicKeys(adminKeys);
      setItems(adminItems(collapsed));
    } else if (RoleName === userRolesConfig.SUPERADMIN) {
      setDynamicKeys(adminKeys);
      setItems(adminItems(collapsed));
    } else if (RoleName === userRolesConfig.MANAGER) {
      setDynamicKeys(managerkeys);
      setItems(managerItems(collapsed));
    } else if (RoleName === userRolesConfig.MARKETING || RoleName === userRolesConfig.MARKETINGEXECUTIVE) {
      setDynamicKeys(marketingkeys);
      setItems(marketingItems(collapsed));
    }
    else if (RoleName === userRolesConfig.HR) {
      setDynamicKeys(hrKeys);
      setItems(hrItems(collapsed));
    }
    else if (RoleName === userRolesConfig.ONLINEMARKETING) {
      setDynamicKeys(onlineMarketingkeys);
      setItems(onlineMarketingItems(collapsed));
    }
    else if (RoleName === userRolesConfig.LOGISTICS) {
      setDynamicKeys(logisticskeys);
      setItems(logisticsItems(collapsed));
    }
    else if (RoleName === userRolesConfig.REGIONAL_MANAGER || userRolesConfig.REGIONALHEAD) {
      setDynamicKeys(regionalManagerkeys);
      setItems(regionalManagerItems(collapsed));
    }

  }, [collapsed, RoleName]);

  useEffect(() => {
    const pathname = route.pathname;
    const parts = pathname.split("/");
    const lastPart = parts[1];
    setActiveTab(lastPart);
    const storedOpenKeys = JSON.parse(localStorage.getItem("openKeys"));
    if (storedOpenKeys) {
      setOpenKeys(storedOpenKeys);
    }
  }, [route]);

  const onOpenChange = (keys) => {
    console.log(keys,'keyssss');
    
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (dynamicKeys.indexOf(latestOpenKey) === -1) {
      localStorage.setItem("openKeys", JSON.stringify(keys));
      setOpenKeys(keys);
    } else {
      localStorage.setItem(
        "openKeys",
        JSON.stringify(latestOpenKey ? [latestOpenKey] : [])
      );
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onClick = ({ key }) => {
    if (key === null) {
    } else {
      navigate(`${key}/`);
    }
  };
  const [imageSrc, setImageSrc] = useState('');
  const { fetchImageAsBase64 } = useFetchImageAsBase64();

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
    <Fragment>
      <MenuHolder>
        {/* <Menu
          onClick={onClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          selectedKeys={[activeTab]}
          mode="inline"
          items={items}
          className="custom-sidebar-menu"
        /> */}
      </MenuHolder>
    </Fragment>
  );
};
