import { THEME } from '@theme/index'
import React from 'react'
import { Triangle } from 'react-loader-spinner'
import styled from 'styled-components'

const CommonLoading = ({ fullScreen = false, height = "auto" }) => {
  return (
    <Container fullScreen={fullScreen} customHeight={height}>
      <LoadingContent>
        <Triangle
          visible={true}
          height="100"
          width="100"
          color={THEME.primary}
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <LoadingText>Loading...</LoadingText>
      </LoadingContent>
    </Container>
  )
}

export default CommonLoading

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  /* Dynamic height based on props */
  height: ${props => {
    if (props.fullScreen) return '100vh';
    if (props.customHeight !== "auto") return props.customHeight;
    return '100%';
  }};
  
  /* Minimum height to ensure centering */
  min-height: ${props => props.fullScreen ? '100vh' : '300px'};
  
  /* Full width */
  width: 100%;
  
  /* Position for full screen overlay */
  ${props => props.fullScreen && `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 9999;
  `}
  
  /* Backup centering methods */
  position: relative;
`

const LoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  
  /* Additional centering */
  text-align: center;
  
  /* Animation for smooth appearance */
  animation: fadeIn 0.3s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const LoadingText = styled.h1`
  color: ${THEME.primary};
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  
  /* Responsive font size */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  /* Loading text animation */
  animation: pulse 1.5s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }
`