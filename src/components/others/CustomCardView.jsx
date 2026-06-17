import styled from "styled-components";

const CustomCard = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 20px 0px #0000001f;
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.12);
  }
`;

const CustomCardView = ({ children, style, onClick }) => {
  return (
    <CustomCard style={style} onClick={onClick}>
      {children}
    </CustomCard>
  );
};

export default CustomCardView;