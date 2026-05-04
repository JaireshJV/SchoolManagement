import styled from "styled-components";

export const StyledClassSchedule = styled.div`

.top-right{
display : flex ;
gap: 10px;
justify-content : end ;

}

@media(max-width : 768px){
.top-right{
flex-direction: column;
}

}
button{
border : none ;
background : #00B050 ;
padding : 7px ;
border-radius : 6px ;
color : white ;
font-weight : 600 ;
font-size : 12px ;
cursor : pointer ;
}

.select{
font-size : 8px !important;
}

h5{
text-align : center ;
color : #696b6eff ;
}

.timestyle{
display : flex ;
flex-direction : column ;
height : 100% ;
justify-content:space-around ;
margin-top : 7px ; 
}

.bottom-most{
display : flex ;
align-items : center ;
gap : 15px ;
margin-top : 7px ;

p{
font-size : 12px ;
font-weight : 250 ;
}
}

.seperate{
display : flex ;
align-items : center ;
gap : 4px ;
}

`

export const StyledSchedule = styled.div`

margin-top : 10px ;
background : #e4dfdf2f ;
padding : 5px 15px ;
height : 85px ;
margin-bottom : 10px ;
border-radius : 6px ; 
width : 90% ;
text-align : left ;
box-shadow: 0px 0px 6px 1px #d7d4d4ff;

h5{
text-align : left ;
color : #9a9b9dff ;
}

p{
font-size : 10px ;
}

.faculty{
color : #469d6e ;
font-weight : 500 ;
}

`

export const ButtomSquare = styled.div`

height : 5px ;
width : 15px ;
border-radius : 6px ;

`