import styled from "styled-components";

export const StyledReports = styled.div`




`


export const StyledCard = styled.div`
  margin-top: 15px;
  padding: 8px !important ;
  border-radius: 8px;
  box-shadow: 0px 0px 1px 1px #d7d4d4ff;
  background: white;

  &:hover{
  border: 1px solid #00b050 ;
  cursor : pointer ;
  }

  p
  {
    padding: 3px;
    margin: 0;
  }
h4 {
margin-bottom : 5px ;
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

  button{
border : none ;
background : #00B050 ;
padding : 5px ;
border-radius : 8px ;
color : white ;
font-weight : 600 ;
font-size : 10px ;
cursor : pointer ;
margin-top : 3px;
}
`;