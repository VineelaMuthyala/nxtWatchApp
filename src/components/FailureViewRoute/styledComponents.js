import styled from 'styled-components'

export const NoResultsImage = styled.img`
width:400px;
height:300px;
font-family:"Roboto";
@media (max-width:576px){
  width:200px;
height:150px;
}
`
export const NoResultsHeading = styled.h1`
font-size:30px;
color:${props => (props.mode ? '#231f20' : '#ffffff')};
@media (max-width:576px){
  font-size:20px;
}
`
export const NoResultsText = styled.p`
font-size:20px;
font-family:"Roboto";
margin-top:0px;
color :${props => (props.mode ? '#383838' : '#909090')};

line-height:1.5;
width:500px;
text-align:center;
@media (max-width:576px){
  font-size:15px;
  width:400px;
  
}
`
export const RetryButton = styled.button`
background-color:#4f46e5;
color:#ffffff;
border:0px;
border-radius:5px;
height: 40px;
width: 100px;
@media (max-width:576px){
 
}
`
export const FaliureViewContainer = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:${props => (props.mode ? '#f1f5f9' : '#181818')};
   
    @media(max-width:576px){
      width: 95vw;
    }
`
