import { Button } from "@components/form";
import React from "react";
import styled from "styled-components";
import Error_Image from '@assets/images/Error_Image.png' 

const Container = styled.div`
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  color: #212529;

  h1 {
    color: black;
    font-weight: 400;
    font-size: 8vh;
  }

  img{
    max-width: 300px;
    object-fit: cover;

  }
`;

const ErrorPage = () => (

  
  <Container>
      <img src={Error_Image} alt="Loading" />
      Error 404 : Something isn't working or is missing.
      <br /> we apologize for this problem.
      <br /><br/>
      <Button.GoBack text={"Go Back"} />
  </Container>
);

export default ErrorPage;
