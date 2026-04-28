import styled from 'styled-components';
import { Card, Form } from 'antd';

export const StyledProfileContainer = styled.div`
  padding: 24px;
  background: #f5f5f5;
  min-height: 100vh;
`;

export const ProfileHeader = styled.div`
  margin-bottom: 24px;
  
  h2 {
    color: #1890ff;
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    
    .anticon {
      font-size: 24px;
    }
  }
`;

export const ProfileCard = styled(Card)`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: none;
  
  .ant-card-body {
    padding: 32px;
  }
`;

export const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  background: linear-gradient(135deg, #EA1B25  0%, #212529 65%);
  border-radius: 12px;
  color: white;
  height: fit-content;
  position: relative;
  
  .profile-avatar-container {
    position: relative;
    margin-bottom: 20px;
    
    .profile-avatar {
      border: 4px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
    
    .remove-icon {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #ff4d4f;
      border: 2px solid white;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 10;
      
      &:hover {
        background: #ff7875;
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(255, 77, 79, 0.4);
      }
      
      .anticon {
        color: white;
        font-size: 14px;
      }
    }
  }
  
  .upload-btn {
    margin-bottom: 16px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    backdrop-filter: blur(10px);
    border-radius: 8px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.5);
      color: white;
    }
    
    .anticon {
      margin-right: 8px;
    }
  }
  
  .file-info {
    background: rgba(255, 255, 255, 0.1);
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    max-width: 200px;
    
    p {
      margin: 0 0 8px 0;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.9);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    
    .remove-btn {
      background: rgba(255, 77, 79, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      font-size: 12px;
      height: 28px;
      padding: 0 12px;
      border-radius: 6px;
      
      &:hover {
        background: #ff4d4f;
        border-color: rgba(255, 255, 255, 0.5);
        color: white;
      }
    }
  }
  
  .user-info {
    h3 {
      color: white;
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 8px 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .role-badge {
      background: rgba(255, 255, 255, 0.2);
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      margin: 0;
      display: inline-block;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
  }
`;

export const FormSection = styled.div`
  padding: 8px 0;
`;

export const StyledForm = styled(Form)`
  .ant-form-item-label {
    > label {
      font-weight: 600;
      color: #262626;
      font-size: 15px;
    }
  }
  
  .ant-input,
  .ant-select-selector {
    border-radius: 8px;
    border: 2px solid #e8e8e8;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #40a9ff;
    }
    
    &:focus,
    &.ant-select-focused .ant-select-selector {
      border-color: #1890ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
  
  .ant-input-lg {
    padding: 12px 16px;
    font-size: 16px;
  }
  
  .ant-select-lg .ant-select-selector {
    padding: 6px 16px;
    
    .ant-select-selection-item {
      line-height: 32px;
      font-size: 16px;
    }
  }
  
  .ant-switch {
    &.ant-switch-checked {
      background-color: #52c41a;
    }
  }
  
  .ant-form-item-explain-error {
    font-size: 13px;
    margin-top: 4px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
  
  .ant-btn {
    border-radius: 8px;
    font-weight: 500;
    height: 44px;
    padding: 0 32px;
    font-size: 16px;
    
    &:first-child {
      background: #f5f5f5;
      border: 2px solid #d9d9d9;
      color: #595959;
      
      &:hover {
        background: #e6f7ff;
        border-color: #40a9ff;
        color: #1890ff;
      }
    }
    
    &.ant-btn-primary {
      background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
      border: none;
      box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
      
      &:hover {
        background: linear-gradient(135deg, #40a9ff 0%, #1890ff 100%);
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(24, 144, 255, 0.4);
      }
      
      &:active {
        transform: translateY(0);
      }
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    .ant-btn {
      width: 100%;
    }
  }
`;

// Additional responsive styles
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${ProfileImageSection} {
      margin-bottom: 24px;
      
      .profile-avatar {
        width: 120px;
        height: 120px;
      }
      
      .user-info h3 {
        font-size: 20px;
      }
    }
    
    ${StyledProfileContainer} {
      padding: 16px;
    }
    
    ${ProfileCard} {
      .ant-card-body {
        padding: 20px;
      }
    }
  }
  
  @media (max-width: 576px) {
    ${ProfileImageSection} {
      .profile-avatar {
        width: 100px;
        height: 100px;
      }
      
      .user-info h3 {
        font-size: 18px;
      }
    }
  }
`;

// Loading states
export const LoadingCard = styled(Card)`
  .ant-card-body {
    padding: 60px 24px;
    text-align: center;
  }
`;

// Error states
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 24px;
  text-align: center;
  
  .ant-result-title {
    color: #ff4d4f;
  }
  
  .ant-result-subtitle {
    color: #8c8c8c;
  }
`;