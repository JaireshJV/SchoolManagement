import { Card, Space } from "antd";
import styled from "styled-components";
import { Button } from "@components/form";
import { CustomRow } from "@components/others";
import { THEME } from "@theme/index";

export const StyledStudentView = styled.div`
padding : 20px ;
`

export const StyledProfileSection = styled(Card)`

// height : 350px ;
// position : absolute ;
width : 100% ;

.top-section {
height : 120px ;
border-radius : 8px ;
background : #d9f2d9 ;
display : flex ;
justify-content : space-between ;

}

.name-title{
color : #216020 ;
}

.profile img{
width : 150px ;
height : 150px ;
border-radius : 50% ;
// position : relative ;
// top : 50% ;
// left : 20% ;
margin : 50px 0px 0px 20px ;
border : 7px solid white ;
 object-fit: cover;
 cursor: pointer ;
}

.cover-image {
margin-top : 20px ;
}

.cover-image img{
width : 80% ;
height : 80% ;
}

.icon-with-label{
display : flex ;
justify-content : left ;
gap: 20px ;
}

.address-portion{
display : flex ;
gap: 20px ;
align-items : center ;
margin-top : 30px ;
}
`

export const StyledImageSection = styled(Card)`

width:100%;
position : relative ;
margin-bottom : 20px ;
 overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  /* left color bar */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 5px;
    background: ${(props) => props.color};
    transition: all 0.35s ease;
  }

  /* Hover effect */
  &:hover::before {
    width: 14px;                 /* slider expansion */
    filter: brightness(1.6);     /* lighter shade automatically */
  }

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
  }


  .image-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap : 20px ;
  }

  .image-container{
  width: 150px;       
    height: 100px;     
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

      .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  }
`

export const SpaceHeight = styled.div`

height : 200px ;
`

export const SpaceHeightSmall = styled.div`

height : 100px ;
`

export const IconWrapper = styled.div`
  background: #216020;
  border-radius: 20px ;
  padding: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color : #f5e607 ;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  font-size : 15px ;
`;

export const SignatureCard = styled(Card)`

align-items : center ;
display : flex ;
justify-content : center ;
height : 100px ;
// background : red ;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: cover;

  cursor : pointer ;
`


// HALL TICKET STYLES :


export const Maindesign = styled.div`
background-color: var(--light-color);
width: 100%;
margin: 0 auto !important;
padding: 0 30px;
& h4 {
    margin: 5px 0;
}
& h3 {
    margin: 5px 0;
    color: ${THEME.primary_color};
    font-size: 26px;
    font-weight: 600;
}

.page-header,
.page-header-space {
  height: 100px;
}

.page-footer-space {
  height: 50px;
}

.footer_sign{
    border:1px solid black;
    padding:2px 5px;
    height:70px;    
}



@media print {
    .page-footer {
font-family:'Times New Roman', Times, serif !important;

  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
  padding: 20px 10px;
}
}

.page-header {
  position: fixed;
  top: 0mm;
  width: 100%;
}
.page {
  page-break-after: always !important;
  height: 20vh;
  margin-top: 52%;
}

@media print {
  thead {
    display: table-header-group;
  }
  tfoot {
    display: table-footer-group;
  }
}
`;


export const Box = styled.div`
background-color: ${THEME.secondary_color};
margin: 5px 0;
padding: 20px 10px;
`;
export const Reverse = styled(CustomRow)`
  @media (maxWidth: '500px') {
    display: flex;
     flex-direction: column-reverse;
   }
`;


export const Buttondesn = styled(Button)`
border: 1px solid #8056F7;
padding: 10px 10px;
line-height: 5px;
&:hover{
  background-color: var(--light-color);
  color: #8056F7;
}
`;

export const Cardsin = styled.div`
width: 100%;
/* padding: 10px; */
`;
export const BillTable = styled.div`
& table thead tr th{
    font-size:14px !important;
}

& table tbody tr td{
    font-size:14px !important;
}

@media print {
    width:96%;
    margin:auto;

table tbody tr{
  border-bottom:1px solid ;
  page-break-inside:'auto';
}

}
table {
  width: 100%;
  height: 200px;
  border-collapse: collapse;
  padding: 2px;
  margin-bottom:20px !important;
  border:1px solid black;

}

th {
  border-bottom: 1px solid black;
  border: 1px solid black;
}

td {
  text-align: center;
  border-right:1px solid;
}
`;

export const PrintTitle = styled.h5`
font-size:${props => props.Size || '12px'};
text-transform:${props => props.UPPER ? 'uppercase' : 'none'};
font-weight:${props => props.Weight || '500'};
text-align:${props => props.TextAlign};
margin-top:${props => props.MT};
`;

export const PrintSubTitle = styled.span`
font-size:${props => props.Size || '12px'};
text-transform:${props => props.UPPER ? 'uppercase' : 'none'};
font-weight:${props => props.Weight || '500'};
text-align:${props => props.TextAlign};
letter-spacing:.5px;
text-decoration:${props => props.Under};
`;

//-----------------------  new  style print------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>------------------------------------------------------



export const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 20px auto;
  color: ${props => props.theme.text};
`;

export const PrintContainer = styled.div`
  border: 1px solid ${props => props.theme.secondary};
  
  @media print {
    border: none;
  }
`;

export const Page = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.secondary};
  background: white;
  
  @media print {
    page-break-after: ${props => props.isLastPage ? 'auto' : 'always'};
    border: 1px solid ${props => props.theme.secondary};
    min-height: ${props => props.isLastPage ? 'auto' : '277mm'};
    min-height: auto; 
    margin: 0;
    padding: 0;
  }
`;

export const Header = styled.div`
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.secondary};
  padding: 10px;
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: ${props => props.theme.text};
`;

export const CompanySection = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.secondary};
`;

export const LogoSection = styled.div`
  width: 150px;
  border-right: 1px solid ${props => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Logo = styled.img`
  max-width: 120px;
  max-height: 80px;
  object-fit: contain;
`;

export const CompanyDetails = styled.div`
  flex: 1;
  text-align: right;
  padding: 10px 5px;
`;

export const CompanyName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 8px 0;
  margin-right: 5px;
  color: ${props => props.theme.text};
`;

export const DetailText = styled.p`
  font-size: 11px;
  margin: 2px 0;
  line-height: 1.4;
  margin-right: 5px;
  margin-left: 5px;
  color: ${props => props.theme.text};
`;

export const AddressSection = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.secondary};
`;

export const BillTo = styled.div`
  flex: 1;
  border-right: 1px solid ${props => props.theme.secondary};
  padding: 0 0 10px 0;
`;

export const ShipTo = styled.div`
  flex: 1;
  border-right: 1px solid ${props => props.theme.secondary};
  padding: 0 0 10px 0;
`;

export const InvoiceDetails = styled.div`
  width: 200px;
  padding: 0 0 10px 0;
`;

export const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: ${props => props.theme.secondary};
  padding: 5px 8px;
  margin: ${props => props.noMargin ? '0' : '0 0 10px 0'};
`;

export const AddressText = styled.p`
  font-size: 11px;
  margin: 4px 0;
  margin-left: 5px;
  line-height: 1.5;
  color: ${props => props.theme.text};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-size: ${props => props.large ? '13px' : '11px'};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
`;

export const TableHeader = styled.th`
  background-color: ${props => props.theme.secondary};
  color: #fff;
  font-weight: bold;
  padding: 8px 5px;
  text-align: ${props => props.align || 'left'};
  border: 1px solid ${props => props.theme.secondary};
     /* page-break-inside: avoid;
  break-inside: avoid; */
  
`;

export const TableCell = styled.td`
  padding: 10px 7px;
  border: 1px solid ${props => props.theme.secondary};
  text-align: ${props => props.align || 'left'};
  color: ${props => props.theme.text};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`;

export const TotalSection = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.secondary};
   page-break-inside: avoid;
  break-inside: avoid;
`;

export const AmountWords = styled.div`
  flex: 1;
  border-right: 1px solid ${props => props.theme.secondary};
  padding: 0 0 10px 0;
`;

export const AmountDetails = styled.div`
  width: 300px;
  padding: 0 0 5px 0;
`;

export const AmountRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 12px;
  color: ${props => props.theme.text};
  ${props => props.grandTotal && `
    border-top: 1px solid ${props.theme.secondary};
    padding-top: 8px;
    margin-top: 8px;
    font-weight: bold;
    font-size: 14px;
  `}
`;

export const TaxTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
  border-bottom: 1px solid ${props => props.theme.secondary};
   page-break-inside: avoid;
  break-inside: avoid;
`;

export const Footer = styled.div`
  display: flex;
  border-top: 1px solid ${props => props.theme.secondary};
   page-break-inside: avoid;
  break-inside: avoid;
`;

export const BankDetails = styled.div`
  flex: 1;
  border-right: 1px solid ${props => props.theme.secondary};
  padding: 0 0 10px 0;
`;

export const Signature = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 0 10px 0;
`;

export const QRCode = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin: 10px 0;
  margin-left: 5px;
`;

export const SignatureImg = styled.img`
  max-width: 150px;
  max-height: 80px;
  margin-top: 20px;
`;

export const AmountWordsText = styled.p`
  font-size: 13px;
  margin-top: 10px;
  margin-left: 5px;
  font-weight: 600;
`;

export const TermsText = styled.p`
  font-size: 11px;
  margin: 10px 0;
`;

export const CompanyFooterName = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
`;

export const AuthorizedText = styled.p`
  font-size: 11px;
  font-weight: bold;
  margin-top: 10px;
`;

export const ContinuedText = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 11px;
  font-style: italic;
  color: ${props => props.theme.lightText};
  border-top: 1px solid ${props => props.theme.secondary};
`;








// HALLTICKET NEW

export const StyledHallTicket = styled.div`

.pdf-single-page {
  // width: 210mm;
  min-height: 297mm;
  padding: 10mm;
  background: white;
  box-sizing: border-box;
  page-break-after: always;
}

margin : 20px ;

.btn-style{
display : flex ;
justify-content : end ;
}

.header-table{
border : 2px solid black ;
padding : 25px ;
}

.header-table td{
border-right :2px solid black ;

}

body {
  margin: 40px;
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f5f5;
}

/* Main Container */
.neet-header {
  display: flex;
  border: 2px solid #000;
  // max-width: 1000px;
  margin: auto;
}

/* Each section */
.header-box {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Left */
.left {
  width: 30%;
  border-right: 2px solid #000;
  text-align: left;
  gap: 10px;
}

.left img {
 max-width: 100%;
  // height: auto;
  height : 100px ;
}

.left-text p {
  margin: 2px 0;
  font-size: 12px;
}

/* Center */
.center {
  width: 40%;
  flex-direction: column;
  text-align: center;
  border-right: 2px solid #000;
}

.center h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.center h3 {
  margin: 5px 0 0;
  font-size: 16px;
  font-weight: bold;
}

/* Right */
.right {
  width: 30%;
  flex-direction: column;
  gap: 6px;
}

.right img {
  // max-width: 100%;
  height : 30px ;
  // height: auto;
}


// Footer

.footer{
  display: flex;
  border: 2px solid #000;
  background: #fff;
  width : 100% ;
  // margin: auto;
  margin-bottom : 10px ;
}

.footer p{
  border-right: 2px solid #000;
  padding : 2px ;
  color :  #b30000 ;
  font-size : 10px ;
}

.locationTable{
border: 2px solid black;
  border-collapse: collapse;
width: 100% ;
}

.locationTable tr{
    border-bottom: 2px solid black;
}

.locationTable th{
    text-align: left;
}

.locationTable th, td{
    width: 10rem;
    border-right: 2px solid black;
    padding: 5px; 
}

.locationTable td:nth-child(odd){
    width: 13rem;
}

.small-font{
padding-top : 40px ;
}

.instruction-box{
margin-top : 10px ;
border : 2px solid black ;
padding : 10px ;
font-size : 12px ;
margin-bottom : 10px;
font-weight : bold ;
}

`

export const StyledInstruction = styled.div`

border : 2px solid black ;
padding : 15px ;
margin-top : 10px ;
font-weight : bold ;
font-size : 13px ;

h4{
text-align : center ;
color : red ;
margin-top : 10px ;
  text-decoration: underline;
  text-underline-offset: 2px; 
  margin-bottom : 0px !important ;
}

pre{
margin-top : -10px !important ;
font-weight : 600px ;
padding : 2px ;
}

span{
font-weight : bold ;
}

`

export const StyledFirstTable = styled.div`

margin-top : 20px ;
margin-bottom : 10px;

h4{
color : red ;
text-align : center ;
}

.sign-area{
padding-top : 100px ;
font-size : 10px !important;
font-weight : bold ;
}

span {
color : #b30000 ;
}

.tableOne{
    width : 100% ;
    border: 2px solid black;
    border-collapse: collapse;
}

.tableOne tr{
    border-bottom: 2px solid black;
}

.tableOne th{
    text-align: left;
}

.tableOne th, td{
    width: 10rem;
    border-right: 2px solid black;
    padding: 5px; 
}

.tableOne td:nth-child(odd){
    width: 13rem;
}

.image-cell {
position: relative;
    width: 120px;
    text-align: center;
    vertical-align: middle;
  background: white;
    border : 2px solid black ;
    border-left : none !important;
}

.image-cell img {
position: relative;
  z-index: 2;
    // width: 100%;
    // height: auto;
    // object-fit: cover;
    width : 200px ;
      // background: white;
    

}

// .tableOne tr:has(.image-cell) td {
//   border-bottom: none !important;
// }

.image-col{
    text-align: center;
    vertical-align: middle;
    border-bottom: 3px solid black !important;
}

.image-col img {
width : 200px ;
}

.image-sign h3{
line-height : 0.5 !important ;
}

.image-sign img {
width : 50px ;
}
.none{
    border: none
}

.self-declare {
  line-height: 1.2; 
  margin-top : 2px ; 

}

.self-declare p {
  margin: 0;  
    font-size : 12px ;
  font-weight : bolder ;
}

`
export const StyledPage = styled.div`
  // width: 100%;
  // height: 100vh;
  display: grid;
  place-items: center;
  margin : 10px ;

 

.post-card{
display : flex ;
justify-content : center ;
align-items : center ;
text-align : center ;
height : 700px ;
width : 600px ;
border : 2px solid black ;
}

`




