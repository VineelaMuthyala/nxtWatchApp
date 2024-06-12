import styled from 'styled-components'

import {IoClose} from 'react-icons/io5'
import {IoMdSearch} from 'react-icons/io'

export const HomePage = styled.div``

export const HomeContainer = styled.div`
display:flex;
flex-direction:row;
width:95vw;

background-color:${props => (props.mode ? '#ffffff' : '#231f20')};
@media (max-width : 576px){
  width:100vw;
  height:100vh;
  padding:0px;
}
`

export const RightContainer = styled.div`
width:70vw;
background-color:${props => (props.mode ? '#ffffff' : '#212121')};
@media(max-width:768px){
  
}
`

export const BannerContainer = styled.div`
background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
background-size: cover;
width:74vw;
height:25vh;
display:flex;
flex-direction:row;
padding-left: 25px;
padding-top:25px;
justify-content:space-between;
@media (max-width:576px){
  width:100vw;
}
`
export const BannerCloseButton = styled.button`
width:20px;
height:20px;
margin-right: 50px;
background-color: transparent;
border:none;

`
export const StyledIconClose = styled(IoClose)`
width:20px;
height:20px;
`
export const BannerTextContainer = styled.div`
width:320px;
display:flex;
flex-direction:column;

`
export const BannerLogoImage = styled.img`
width:120px;
height:30px;
`
export const BannerText = styled.p`
margin-top:20px;
color: #424242;
font-weight:bold;
@media (max-width:576px){
width: 200px
}
`
export const BannerGetItButton = styled.button`
width:110px;
height:40px;
margin-top:25px;

background-color: transparent;
border: 1px solid #424242;
margin-top:0px;
`
export const HomeVideosContainer = styled.div`
background-color:${props => (props.mode ? '#f1f5f9' : '#181818')};
color :${props => (props.mode ? '#424242' : '#ffffff')};
width:70vw;
height:90vh;
padding:20px;
overflow: scroll;
@media (max-width : 576px){
  padding:0px;
  width:100vw;
  height:100vh;
}
`
export const SearchContainer = styled.div`
margin-bottom:30px;

@media(max-width:576px){
  padding:20px;
  margin-bottom:0px;
}
`
export const SearchInput = styled.input`
width:400px;
height:30px;
border: 1px solid #94a3b8;
padding-left:10px;
color :${props => (props.mode ? '#424242' : '#ffffff')};
background-color: ${props => (props.mode ? ' #ffffff' : '#231f20')};
@media (max-width : 576px){
  width:275px;
}
`
export const SearchButton = styled.button`
width:70px;
height:30px;
border-left:none;
border-right: 1px solid #94a3b8;
border-top: 1px solid #94a3b8;
border-bottom: 1px solid #94a3b8;
background-color: ${props => (props.mode ? '#f1f1f1' : '#424242')};
@media (max-width : 576px){
  width:60px;
}
`
export const StyledIconSearch = styled(IoMdSearch)``

export const VideoListContainer = styled.div`
display: flex;
flex-direction: row;
width:65vw;
flex-wrap: wrap;

@media (max-width : 576px){
  width:100vw;
}
`
export const NoSearchResultsContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
@media (max-width:576px){
  
}
`
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
export const FaliureViewContainer = styled(NoSearchResultsContainer)``

export const StyledLink = styled.a`
text-decoration: none;

`
