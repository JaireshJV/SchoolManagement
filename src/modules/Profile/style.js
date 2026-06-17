import { Card } from "antd";
import styled from "styled-components";

export const HeaderCard = styled(Card)`
  background: linear-gradient(to right, #009933 25%, #006600 75%);
  color: white;

  p {
    font-size: 10px;
    font-weight: 150;
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    height: 100%;
    align-items: center;
  }

  @media (max-width:784px){

  .header-right{
  margin-top : 5px ;
  }
  }
  
  .system-admin {
    border-radius: 7px;
    background: green;
    color: white;
    padding: 7px;
    border: none;
    font-size: 12px;
    cursor : pointer ;
  }

  .super-user {
    border-radius: 7px;
    background: #e6da00;
    padding: 7px;
    border: none;
    font-size: 12px;
    cursor : pointer ;
  }
`;