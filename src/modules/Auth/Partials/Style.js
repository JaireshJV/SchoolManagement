import styled from "styled-components";
import { Spin } from "antd";

export const LoginContainer = styled.div`
  min-height: 100vh;

background: linear-gradient(
  135deg,
  #39c66a 0%,     /* green + slight yellow shade */
  #63d166 44%,    /* warm green */
  #cfe93a 50%,    /* soft blend center */
  #f6de63 56%,    /* yellow slightly shaded */
  #e6c94a 100%    /* deeper yellow edge */
);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 20% 20%,
        rgba(220, 38, 38, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(220, 38, 38, 0.05) 0%,
        transparent 50%
      );
  }

  @keyframes pulse {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.7;
    }
  }
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  min-height: 500px;
  position: relative;
  z-index: 1;
  marin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 420px;
    border-radius: 16px;
    min-height: auto;
  }
`;

export const IllustrationSection = styled.div`
  flex: 1.2;
  background: #1e272e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm0-20c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      repeat;
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(2deg);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(220, 38, 38, 0.3) 0%,
      transparent 70%
    );
    border-radius: 50%;
    transform: translate(-50%, -50%);
    filter: blur(60px);
    animation: glow 6s ease-in-out infinite alternate;
  }

  @keyframes glow {
    0% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(0.8);
    }
    100% {
      opacity: 0.6;
      transform: translate(-50%, -50%) scale(1.2);
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 280px;
    padding: 40px 20px;
    flex: none;
  }
`;

export const LoginImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;
`;

export const LogoContainer = styled.div`
  text-align: center;
  color: white;
  position: relative;

  .logo-icon {
    width: 400px;
    /* background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%); */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    /* box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 0 4px rgba(255, 255, 255, 0.1),
      inset 0 0 0 2px rgba(220, 38, 38, 0.1); */
    position: relative;
    transition: all 0.4s ease;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .icon {
    width: 60px;
    height: 60px;
    color: #ea1b25;
  }

  p {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
    font-weight: 300;
    letter-spacing: 1.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    .logo-icon {
      width: 90px;
      height: 90px;
      margin-bottom: 20px;

      &::before {
        inset: -6px;
      }

      &::after {
        inset: -10px;
      }
    }

    .icon {
      width: 45px;
      height: 45px;
    }

    h1 {
      font-size: 36px;
      letter-spacing: 3px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const FormSection = styled.div`
  flex: 0.8;
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EA1B25' fill-opacity='0.02'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      repeat;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export const FormContainer = styled.div`
  max-width: 360px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;

  .form-header {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      font-size: 32px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 12px;
      position: relative;

      /* Underline accent */
      // &::after {
      //   content: '';
      //   position: absolute;
      //   bottom: -8px;
      //   left: 50%;
      //   transform: translateX(-50%);
      //   width: 60px;
      //   height: 3px;
      //   background: linear-gradient(90deg, #EA1B25, #991b1b);
      //   border-radius: 2px;
      // }
    }

    p {
      color: #6b7280;
      margin: 0;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .login-form {
    .ant-form-item-label > label {
      font-weight: 600;
      color: #1a1a1a;
      font-size: 15px;
      margin-bottom: 8px;
    }

    .ant-form-item {
      margin-bottom: 24px;
    }

    .ant-form-item-explain-error {
      font-size: 13px;
      color: #ea1b25;
      margin-top: 6px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  width: 100%;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 16px;
  z-index: 2;
  color: #9ca3af;
  pointer-events: none;
  font-size: 18px;
  transition: color 0.2s;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 14px 50px 14px 50px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
  background: white;
  color: #1a1a1a;
  transition: all 0.3s ease;
  font-weight: 500;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }

  &:hover {
    border-color: #ea1b25;
    box-shadow: 0 0 0 0px rgba(220, 38, 38, 0.1);
  }

  &:focus {
    outline: none;
    border-color: #ea1b25;
    box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.1);
    background: white;
  }

  &:focus + ${InputIcon} {
    color: #ea1b25;
  }

  &[type="password"] {
    padding-right: 50px;
  }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 16px;
  z-index: 2;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    color: #ea1b25;
    background: rgba(220, 38, 38, 0.05);
  }

  &:focus {
    outline: none;
    color: #ea1b25;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background: #40bc3e;
  color: white;
  font-weight: 600;
  padding: 18px 20px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  height: 56px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(220, 38, 38, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    background: linear-gradient(135deg, #f5e607 0%, #aaa06fff 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;

    &:hover {
      background: linear-gradient(135deg, #ea1b25 0%, #991b1b 100%);
      transform: none;
      box-shadow: 0 4px 15px rgba(220, 38, 38, 0.2);
    }
  }
`;

export const PageLoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
  z-index: 9999;
`;

export const PageLoadingContent = styled.div`
  text-align: center;
  color: white;

  .ant-spin {
    margin-bottom: 20px;

    .anticon {
      font-size: 24px;
      color: white;
    }
  }
`;

export const PageLoadingTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 16px;
`;

export const PageLoadingSubtitle = styled.div`
  font-size: 14px;
  opacity: 0.8;
  margin-top: 8px;
`;

// Form Spinner Styles
export const CustomSpinContainer = styled(Spin)`
  max-height: none;

  .ant-spin-dot {
    i {
      background-color: #dc2626;
    }
  }

  .anticon {
    color: #dc2626;
  }
`;
