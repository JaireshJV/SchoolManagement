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

  .quick-report {
    border-radius: 7px;
    background: green;
    color: white;
    padding: 7px;
    border: none;
    font-size: 12px;
    cursor : pointer ;
  }

  .add-student {
    border-radius: 7px;
    background: #e6da00;
    padding: 7px;
    border: none;
    font-size: 12px;
    cursor : pointer ;
  }
`;

export const StyledCard = styled.div`
  margin-top: 15px;
  padding: 8px !important ;
  border-radius: 8px;
  box-shadow: 0px 0px 6px 1px #d7d4d4ff;
  border: 1px solid #cecdcd94;
  background: white;

  p,
  h4 {
    padding: 3px;
    margin: 0;
  }

  p{
  font-size : 10px ;
  font-weight: 300;
  }
  .emoji {
    font-size: 22px;
  }

  .colored-p {
    font-weight: 800;
    font-size: 10px;
  }
`;

export const StyledBarChart = styled(Card)`
  margin-top: 15px;
`;

export const StyledProgressCard = styled(Card)`

margin-top : 15px ;

h4{
    font-size: 16px;
    margin-bottom : 20px;
    color: #111827;
}

p{
font-size : 12px ;
}

hr{
margin-top : 20px ;
}

h5{
margin-top : 10px ;
}

.recent{
margin-top : 10px ;
// color : grey ;
  font-size : 10px ;
  font-weight: 300;
}

.viewall{
color : #53CA89 ;
cursor : pointer ;
}

`;
