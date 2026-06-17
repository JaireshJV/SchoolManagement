import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  adminAuthenticated,
  auditingAuthenticated,
  MarketingAuthenticated,
  regionalManagerAuthenticated,
} from "@router/config/routes";
import styled from "styled-components";
import DashboardLayout from "@layout/DashboardLayout";
import { useSelector } from "react-redux";
import { selectCurrentRoleName } from "@modules/Auth/authSlice";
import { userRolesConfig } from "@router/config/roles";

const PageFlex = styled.div`
  overflow: hidden;
`;

const AuthPage = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const RoleName = useSelector(selectCurrentRoleName);

  const [authRoutePages, setAuthRoutePages] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      if (
        RoleName === userRolesConfig.ADMIN ||
        RoleName === userRolesConfig.SUPERADMIN ||
        RoleName === userRolesConfig.HR
      ) {
        setAuthRoutePages(adminAuthenticated);
      } 
      else if (RoleName === userRolesConfig.MANAGER) {
        setAuthRoutePages(auditingAuthenticated);
      } 
      else if (
        RoleName === userRolesConfig.REGIONAL_MANAGER ||
        RoleName === userRolesConfig.REGIONALHEAD ||
        RoleName === userRolesConfig.LOGISTICS
      ) {
        setAuthRoutePages(regionalManagerAuthenticated);
      } 
      else if (
        RoleName === userRolesConfig.MARKETING ||
        RoleName === userRolesConfig.MARKETINGEXECUTIVE ||
        RoleName === userRolesConfig.ONLINEMARKETING
      ) {
        setAuthRoutePages(MarketingAuthenticated);
      } 
      else {
        navigate("/signin");
      }
    }
  }, [isAuthenticated, RoleName, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <PageFlex>
      <DashboardLayout>
        <Routes>
          {authRoutePages.map(({ routePath, Component }) => (
            <Route
              key={routePath}
              path={routePath}
              element={<Component />}
            />
          ))}
        </Routes>
      </DashboardLayout>
    </PageFlex>
  );
};

export default AuthPage;