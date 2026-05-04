import React, { useState } from "react";
import { Col, Form, Spin } from "antd";
import {
  LoginContainer,
  LoginCard,
  LoginImg,
  FormContainer,
  StyledInput,
  StyledButton,
  LogoContainer,
  InputWrapper,
  InputIcon,
  PasswordToggle,
  IllustrationSection,
  FormSection,
  PageLoadingContainer,
  PageLoadingContent,
  PageLoadingTitle,
  PageLoadingSubtitle,
  CustomSpinContainer,
  StyledLeftPortion,
  LogoPortion,
  StyledFeatures,
  StyledLogo,
} from "./Style";
import {
  EyeFilled,
  LockFilled,
  MailFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import { FiEyeOff } from "react-icons/fi";
import Login_Img from "@assets/images/EduProLogo.png";
import { CustomRow } from "@components/others";
import { CustomTag } from "@components/form";

const NewSignInForm = ({ handleSignIn, loading, pageLoading = false }) => {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onFinish = (values) => {
    handleSignIn(values);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const antIcon = <LoadingOutlined spin />;

  if (pageLoading) {
    return (
      <PageLoadingContainer>
        <PageLoadingContent>
          <Spin indicator={antIcon} size="large" />
          <PageLoadingTitle>Loading ENDLESS...</PageLoadingTitle>
          <PageLoadingSubtitle>
            Please wait while we prepare your experience
          </PageLoadingSubtitle>
        </PageLoadingContent>
      </PageLoadingContainer>
    );
  }

  return (
    <LoginContainer>
      <CustomRow>
        <Col span={24} md={15}>
          <StyledLeftPortion>
            <LogoPortion>
              <CustomRow>
                <Col span={24} md={24}>
                  <StyledLogo>
                    <img src={Login_Img} alt="Edu Pro" />
                    <h2>EduPro Institute <br/> Management System</h2>
                    <p>Complete ERP for modern institutes</p>
                  </StyledLogo>
                </Col>
                <Col span={24} md={24}>
                  <StyledFeatures>
                    <div>
                    <p><CustomTag title={'🎓'} style={{borderRadius:"50%"}} color={'#9d9d9d6a'}/> Student & Parent Portal</p>
                    <p><CustomTag title={'📊'} style={{borderRadius:"50%"}} color={'#9d9d9d6a'}/> Live Attendance & Reports</p>
                    <p><CustomTag title={'💳 '} style={{borderRadius:"50%"}} color={'#9d9d9d6a'}/> Fee Management & Alerts</p>
                    <p><CustomTag title={'📹 '} style={{borderRadius:"50%"}} color={'#9d9d9d6a'}/> Recorded Classes & Materials</p>
                    </div>
                  </StyledFeatures>
                </Col>
              </CustomRow>
            </LogoPortion>
          </StyledLeftPortion>
        </Col>

        <Col span={24} md={9}>
          <FormSection>
            <LogoContainer>
              <div
                className="logo-icon"
                style={{
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={Login_Img}
                  alt="Edu Pro"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </LogoContainer>
            <FormContainer>
              <CustomSpinContainer
                spinning={loading}
                indicator={antIcon}
                tip="Signing you in..."
              >
                <div
                  className="form-header"
                  style={{ marginBottom: "20px", marginTop: "15px" }}
                >
                  <h2>Login</h2>
                  <p>Institute Management Portal</p>
                </div>

                <Form
                  form={form}
                  onFinish={onFinish}
                  layout="vertical"
                  className="login-form"
                >
                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email address",
                      },
                      {
                        type: "email",
                        message: "Please enter a valid email address",
                      },
                    ]}
                  >
                    <InputWrapper>
                      <InputIcon>
                        <MailFilled />
                      </InputIcon>
                      <StyledInput
                        placeholder="Enter your email"
                        name="email"
                        type="email"
                        onChange={handleInputChange}
                        disabled={loading}
                      />
                    </InputWrapper>
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      { required: true, message: "Please enter your password" },
                      // { min: 6, message: 'Password must be at least 6 characters' }
                    ]}
                  >
                    <InputWrapper>
                      <InputIcon>
                        <LockFilled />
                      </InputIcon>
                      <StyledInput
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        name="password"
                        onChange={handleInputChange}
                        disabled={loading}
                      />
                      <PasswordToggle
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={loading}
                      >
                        {showPassword ? (
                          <FiEyeOff size={18} />
                        ) : (
                          <EyeFilled size={18} />
                        )}
                      </PasswordToggle>
                    </InputWrapper>
                  </Form.Item>

                  <StyledButton
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    className="login-button"
                    style={{
                      marginTop: "20px",
                      height: "50px",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    {loading ? "Signing In..." : "Sign In →"}
                    {/* {!loading && <ArrowRightOutlined />} */}
                  </StyledButton>
                </Form>

                <div
                  style={{
                    textAlign: "center",
                    marginTop: "24px",
                    fontSize: "12px",
                    color: "#737373",
                  }}
                >
                  © 2026 EduPro Institute · All rights reserved
                </div>
              </CustomSpinContainer>
            </FormContainer>
          </FormSection>
        </Col>
      </CustomRow>
    </LoginContainer>
  );
};

export default NewSignInForm;
