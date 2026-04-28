import React, { Fragment } from "react";
// import Button from './Form/CustomButton'
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Network_Error from "@assets/images/Network_Error.png";
import { Button } from "@components/form";

const Container = styled.div`
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  color: #6974fc;

  h1 {
    color: black;
    font-weight: 400;
    font-size: 8vh;
  }

  img {
    width: 200px;
    object-fit: cover;
  }
`;

export const NetWorkError = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(location.state.previousUrl);
  };

  return (
    <Fragment>
      <Container>
        <img src={Network_Error} alt="Loading" />
        Error 404 : Something isn't working or is missing.
        <br /> we apologize for this problem.
        <br />
        <br />
        <Button.GoBack text={"Go Back"} onClick={() => goBack()} />
      </Container>
    </Fragment>
  );
};
