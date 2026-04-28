import React, { useEffect, useState } from "react";
import { CustomCardView, CustomRow } from "@components/others";
import { Col, Collapse, Row } from "antd";
import { SvgIcons } from "@assets/images";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import {
  GetCardCount,
  GetRoleEmployeeData,
  AllCardCount,
} from "../DashboardMainSlice";
import {
  CollapseMainDiv,
  StyledAdminDash,
} from "@modules/Dashboard/AdminDashBoard/style";
import {
  DashboardBarGraph,
  DashboardPieChart,
  DashboardLineChart,
  DashboardCircleChart,
  DashboardIncomeExpenseChart,
  DashboardOrderLineChart,
} from "./DashChartjs";
import { DashboardTable } from "./DashboardTable";
import {
  FiBriefcase,
  FiDollarSign,
  FiShoppingBag,
  FiShoppingCart,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import OrderTrackingSearch from "./OrderTrackingSearch";

const SalesPurchaseSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 330px;
  margin-right: 20px;
  margin-left: 10px;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const SalesPurchaseCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 24px;
  }
`;

const StyledCard = styled.div`
  background: ${(props) => props.background};
  border-radius: 16px;
  padding: 24px;
  width: 350px;
  height: 180px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 250px;
  }
`;

const BackgroundIcon = styled.div`
  position: absolute;
  top: -5px;
  right: -2px;
  font-size: 80px;
  opacity: 0.1;
  transform: rotate(15deg);
  user-select: none;
  pointer-events: none;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

const IconWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardValue = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  line-height: 1;
`;

const ChartsSection = styled(CustomRow)`
  margin-bottom: 48px;
`;

const Spacer = styled.div`
  height: 24px;
`;

const DashboardMainView = () => {
  const dispatch = useDispatch();

  const cardCount = useSelector(AllCardCount);

  console.log(cardCount, "cardCount");

  useEffect(() => {
    dispatch(GetCardCount());
    dispatch(GetRoleEmployeeData());
  }, [dispatch]);

  const items = [
    {
      key: "1",
      label: (
        <span style={{ fontSize: "21px", fontWeight: "400" }}>Orders</span>
      ),
      children: <DashboardTable type="orders" />,
    },
  ];

  const mainCards = [
    {
      key: "1",
      name: "Total Registered",
      value: cardCount?.totalregister || 0,
      color: "linear-gradient(135deg, #39c66a 0%, #63d166 45%, #cfe93a 100%)",
      icon: <FiUsers size={40} color="rgba(255,255,255,0.9)" />,
      bgIcon: "👤",
    },
    {
      key: "2",
      name: "Current Day Registered",
      value: cardCount?.currendDay || 0,
      color: "linear-gradient(135deg, #cfe93a 0%, #ffe066 55%, #e6c94a 100%)",
      icon: <FiUser size={40} color="rgba(255,255,255,0.9)" />,
      bgIcon: "👥",
    },
  ];

  return (
    <StyledAdminDash>
      <Row gutter={[24, 24]}>
        {mainCards.map((item) => (
          <Col
            span={24}
            md={12}
            lg={12}
            xl={12}
            key={item.key}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <StyledCard background={item.color}>
              <BackgroundIcon>{item.bgIcon}</BackgroundIcon>

              <IconContainer>
                <IconWrapper>{item.icon}</IconWrapper>
              </IconContainer>

              <div>
                <CardTitle>{item.name}</CardTitle>

                <CardValue>{item.value}</CardValue>
              </div>
            </StyledCard>
          </Col>
        ))}
      </Row>

      <Spacer />
      <Spacer />

      <ChartsSection space={[32, 32]}>


        <Col span={24} md={24} lg={12}>
          <CustomCardView style={{ height: "100%" }}>
            <DashboardCircleChart />
          </CustomCardView>
        </Col>

        <Col span={24} md={24} lg={12}>
          <CustomCardView style={{ height: "100%" }}>
            <DashboardOrderLineChart />
          </CustomCardView>
        </Col>


            
      </ChartsSection>
    </StyledAdminDash>
  );
};

export default DashboardMainView;
