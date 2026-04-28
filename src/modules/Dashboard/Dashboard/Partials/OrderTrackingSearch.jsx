import React, { useState } from 'react';
import { Input, Card, Timeline, Tag, Row, Col, Spin, Alert, Empty, Button } from 'antd';
import {
    SearchOutlined,
    InboxOutlined,
    UserOutlined,
    EnvironmentOutlined,
    CalendarOutlined,
    CloseCircleFilled,
    CheckCircleOutlined,
    ClockCircleOutlined
} from "@ant-design/icons";

import styled from 'styled-components';
import { baseRequest } from '@request/request';

// Styled Components
const SearchContainer = styled.div`
  background: linear-gradient(135deg, #EA1B25  0%, #212529 65%);
  padding: 15px 10px;
  border-radius: 16px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const SearchTitle = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInputContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  gap: 12px;
  
  .ant-input {
    border-radius: 50px;
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    
    &:focus {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }
  }
  
  .ant-btn {
    border-radius: 50px;
    height: auto;
    padding: 12px 30px;
    font-weight: 600;
    border: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
  }
`;

const TrackingCard = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: none;
  overflow: hidden;
  
  .ant-card-head {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-bottom: none;
    padding: 20px 24px;
  }
  
  .ant-card-body {
    padding: 30px;
  }
`;

const InfoSection = styled.div`
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  
  .icon {
    margin-right: 12px;
    color: #1890ff;
    font-size: 16px;
  }
  
  .label {
    font-weight: 600;
    margin-right: 8px;
    color: #666;
    min-width: 120px;
  }
  
  .value {
    color: #333;
    font-weight: 500;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledTimeline = styled(Timeline)`
  .ant-timeline-item {
    padding-bottom: 30px;
    
    &:last-child {
      padding-bottom: 0;
    }
  }
  
  .ant-timeline-item-head {
    width: 16px;
    height: 16px;
    border-width: 3px;
  }
  
  .ant-timeline-item-content {
    margin-left: 30px;
    min-height: 60px;
  }
  
  .ant-timeline-item-tail {
    border-left: 2px solid #f0f0f0;
  }
  
  .completed-status {
    .ant-timeline-item-tail {
      border-left: 2px solid #52c41a;
    }
  }
  
  .current-status {
    .ant-timeline-item-head {
      animation: pulse-dot 2s infinite;
    }
    
    .ant-timeline-item-content {
      background: linear-gradient(135deg, #e8f5e8 0%, #f0f9f0 100%);
      border: 1px solid #d9f7be;
      border-radius: 12px;
      padding: 16px 20px;
      margin-left: 20px;
      margin-top: -8px;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: -8px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid #d9f7be;
      }
      
      &::after {
        content: '';
        position: absolute;
        left: -7px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-right: 7px solid #f0f9f0;
      }
    }
  }
`;

const StatusTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.isCompleted ? '#333' : '#999'};
`;

const StatusDescription = styled.div`
  color: ${props => props.isCompleted ? '#666' : '#bbb'};
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 8px;
`;

const StatusTimeline = styled.div`
  color: #888;
  font-size: 12px;
  font-style: italic;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  
  .empty-icon {
    font-size: 48px;
    color: #d9d9d9;
    margin-bottom: 16px;
  }
  
  .empty-title {
    font-size: 18px;
    color: #999;
    margin-bottom: 8px;
  }
  
  .empty-desc {
    color: #bbb;
  }
`;

const ProductInfo = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const OrderType = styled.div`
  font-size: 14px;
  opacity: 0.9;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

const LoadingText = styled.div`
  margin-top: 16px;
  color: #666;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CardTitleIcon = styled(InboxOutlined)`
  font-size: 20px;
  color: #1890ff;
`;

const CardTitleText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const TrackingTitle = styled.h3`
  margin-bottom: 24px;
  color: #333;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TimelineDot = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${props => props.color};
  border-radius: 50%;
  border: 2px solid ${props => props.color};
  position: relative;
  
  ${props => props.isCurrent && `
    animation: pulse-dot 2s infinite;
    box-shadow: 0 0 0 4px ${props.color}22;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      background-color: white;
      border-radius: 50%;
    }
  `}
`;

const CompletedDot = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${props => props.color};
  border-radius: 50%;
  border: 2px solid ${props => props.color};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '✓';
    color: white;
    font-size: 10px;
    font-weight: bold;
    line-height: 1;
  }
`;

const PendingDot = styled.div`
  width: 14px;
  height: 14px;
  background-color: #f0f0f0;
  border-radius: 50%;
  border: 2px solid #d9d9d9;
`;

const GlobalStyles = styled.div`
  @keyframes pulse-dot {
    0% {
      box-shadow: 0 0 0 0 rgba(82, 196, 26, 0.7);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(82, 196, 26, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(82, 196, 26, 0);
    }
  }
  
  .ant-timeline-item.completed-status .ant-timeline-item-tail {
    border-left-color: #52c41a !important;
  }
  
  .ant-timeline-item.current-status .ant-timeline-item-head {
    border-color: #52c41a !important;
  }
`;

const OrderTrackingSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [trackingData, setTrackingData] = useState(null);
    const [error, setError] = useState(null);
    const [searched, setSearched] = useState(false);

    // Dynamic status configuration based on API data
    const getStatusConfig = (trackingStatus) => {
        const config = {};
        const statusKeys = Object.keys(trackingStatus || {});
        
        statusKeys.forEach((key, index) => {
            const colors = ['#faad14', '#13c2c2', '#1890ff', '#fa8c16', '#52c41a'];
            
            // Dynamic title generation - capitalize each word
            const dynamicTitle = key
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            
            config[key] = {
                color: colors[index] || '#666',
                title: dynamicTitle,
                description: `Your order is currently in ${dynamicTitle.toLowerCase()} stage`,
            };
        });
        
        return config;
    };

    const searchOrder = async () => {
        if (!searchValue.trim()) {
            setError('Please enter an order ID');
            return;
        }
        setLoading(true);
        setError(null);
        setSearched(true);
        try {
            const response = await baseRequest.get(`api/card22/search/${searchValue}`);
            setTrackingData(response.data);
        } catch (err) {
            setError(err.message || 'Order not found');
            setTrackingData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    
        if (!value.trim()) {
            setSearched(false);
            setTrackingData(null);
            setError(null);
        }
    };

    const handleClearInput = () => {
        setSearchValue('');
        setSearched(false);
        setTrackingData(null);
        setError(null);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchOrder();
        }
    };

    const getTimelineItems = () => {
        if (!trackingData || !trackingData.trackingStatus) return [];

        const statusConfig = getStatusConfig(trackingData.trackingStatus);
        const allStatuses = Object.keys(trackingData.trackingStatus);
        const currentStatusKey = trackingData.currentStatus?.toLowerCase();
        const currentStatusIndex = allStatuses.indexOf(currentStatusKey);

        return allStatuses.map((statusKey, index) => {
            const isCompleted = index <= currentStatusIndex;
            const isCurrent = index === currentStatusIndex;
            const config = statusConfig[statusKey];
            const statusData = trackingData.trackingStatus[statusKey];
            
            // Get timeline information if available
            const timelineInfo = statusData && statusData.length > 0 ? statusData[0].timeline : null;

            return {
                color: isCompleted ? config.color : '#d9d9d9',
                className: isCompleted ? 'completed-status' : (isCurrent ? 'current-status' : ''),
                dot: isCurrent ? (
                    <TimelineDot 
                        color={config.color}
                        isCurrent={true}
                    />
                ) : (
                    isCompleted ? (
                        <CompletedDot color={config.color} />
                    ) : (
                        <PendingDot />
                    )
                ),
                children: (
                    <div>
                        <StatusTitle isCompleted={isCompleted}>
                            <span>{config.title}</span>
                            {isCurrent && <Tag color={config.color}>Current</Tag>}
                            {isCompleted && !isCurrent && <Tag color="success">Completed</Tag>}
                        </StatusTitle>
                        <StatusDescription isCompleted={isCompleted}>
                            {config.description}
                        </StatusDescription>
                        {timelineInfo && isCompleted && (
                            <StatusTimeline>
                                {timelineInfo}
                            </StatusTimeline>
                        )}
                    </div>
                ),
            };
        });
    };

    return (
        <GlobalStyles>
            <SearchContainer>
                <SearchTitle>Track Your Order</SearchTitle>
                <SearchInputContainer>
                    <Input
                        size="large"
                        placeholder="Enter your order ID"
                        value={searchValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        prefix={<InboxOutlined />}
                        suffix={
                            searchValue ? (
                                <CloseCircleFilled onClick={handleClearInput} />
                            ) : null
                        }
                    />
                    <Button
                        size="large"
                        icon={<SearchOutlined />}
                        onClick={searchOrder}
                        loading={loading}
                    >
                        Track Order
                    </Button>
                </SearchInputContainer>
            </SearchContainer>

            {searched && (
                <>
                    {error && (
                        <Alert
                            message="Order Not Found"
                            description={error}
                            type="error"
                            showIcon
                        />
                    )}

                    {loading && (
                        <LoadingContainer>
                            <Spin size="large" />
                            <LoadingText>Searching for your order...</LoadingText>
                        </LoadingContainer>
                    )}

                    {trackingData && (
                        <TrackingCard
                            title={
                                <CardTitle>
                                    <CardTitleIcon />
                                    <CardTitleText>Order Details</CardTitleText>
                                    <Tag color="blue">#{trackingData.orderId}</Tag>
                                </CardTitle>
                            }
                        >
                            {trackingData.productName && (
                                <ProductInfo>
                                    <ProductName>
                                        📦 {trackingData.productName}
                                    </ProductName>
                                    {trackingData.orderType && (
                                        <OrderType>
                                            Order Type: {trackingData.orderType}
                                        </OrderType>
                                    )}
                                </ProductInfo>
                            )}

                            <InfoSection>
                                <Row gutter={[24, 16]}>
                                    <Col xs={24} md={12}>
                                        {trackingData.customerName && (
                                            <InfoItem>
                                                <UserOutlined className="icon" />
                                                <span className="label">Customer:</span>
                                                <span className="value">{trackingData.customerName}</span>
                                            </InfoItem>
                                        )}
                                        <InfoItem>
                                            <InboxOutlined className="icon" />
                                            <span className="label">Order ID:</span>
                                            <span className="value">{trackingData.orderId}</span>
                                        </InfoItem>
                                        {trackingData.trakingId && (
                                            <InfoItem>
                                                <span className="icon">🏷️</span>
                                                <span className="label">Tracking ID:</span>
                                                <span className="value">{trackingData.trakingId}</span>
                                            </InfoItem>
                                        )}
                                    </Col>
                                    <Col xs={24} md={12}>
                                        {trackingData.currentLocation && (
                                            <InfoItem>
                                                <EnvironmentOutlined className="icon" />
                                                <span className="label">Current Location:</span>
                                                <span className="value">{trackingData.currentLocation}</span>
                                            </InfoItem>
                                        )}
                                        {trackingData.expectedDeliveryDate && (
                                            <InfoItem>
                                                <CalendarOutlined className="icon" />
                                                <span className="label">Expected Delivery:</span>
                                                <span className="value">
                                                    {new Date(trackingData.expectedDeliveryDate).toLocaleDateString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            </InfoItem>
                                        )}
                                        {trackingData.currentStatus && (
                                            <InfoItem>
                                                <span className="icon">📊</span>
                                                <span className="label">Current Status:</span>
                                                <span className="value">
                                                    <Tag color="processing">
                                                        {trackingData.currentStatus}
                                                    </Tag>
                                                </span>
                                            </InfoItem>
                                        )}
                                    </Col>
                                </Row>
                            </InfoSection>
                            
                            {trackingData.trackingStatus && Object.keys(trackingData.trackingStatus).length > 0 && (
                                <div>
                                    <TrackingTitle>
                                        📈 Tracking Progress
                                    </TrackingTitle>
                                    <StyledTimeline items={getTimelineItems()} />
                                </div>
                            )}
                        </TrackingCard>
                    )}

                    {!trackingData && !loading && !error && (
                        <EmptyState>
                            <InboxOutlined className="empty-icon" />
                            <div className="empty-title">No Results Found</div>
                            <div className="empty-desc">Please check your order ID and try again</div>
                        </EmptyState>
                    )}
                </>
            )}
        </GlobalStyles>
    );
};

export default OrderTrackingSearch;