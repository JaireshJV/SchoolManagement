import React, { useState } from "react";
import { Form, Spin } from "antd";
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
} from "./Style";
import {
  ArrowRightOutlined,
  EyeFilled,
  LockFilled,
  MailFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import { FiEyeOff } from "react-icons/fi";
import Login_Img from "@assets/images/logo_endless_pvtltd.png";

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
      <LoginCard>

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
                alt="Endless Logo"
                style={{
                  width: "60%",
                  height: "60%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
            </div> */}
          </LogoContainer>
          <FormContainer>
            <CustomSpinContainer
              spinning={loading}
              indicator={antIcon}
              tip="Signing you in..."
            >
              <div className="form-header" style={{ marginBottom: "20px",marginTop:"15px" }}>
                <h2 >
                  Login
                </h2>
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
                  {loading ? "Logging In..." : "Login"}
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
                @ 2026 Endless C Pvt Ltd. All rights reserved.
              </div>

              {/* <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "20px",
                  color: "#999",
                  fontSize: "12px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "linear-gradient(135deg, #dc2626, #991b1b)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    O
                  </span>
                </div>
                <span>Powered by ENDLESS</span>
              </div> */}
            </CustomSpinContainer>
          </FormContainer>
        </FormSection>
      </LoginCard>
    </LoginContainer>
  );
};

export default NewSignInForm;
