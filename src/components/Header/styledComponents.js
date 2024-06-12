import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'

export const HeaderContainer = styled.div`
width: 95vw;
height:70px;
display:flex;
flex-direction:row;
justify-content:space-between;
padding:20px;
background-color:${props => (props.mode ? '#ffffff' : '#212121')};

`
export const HeaderLogoLight = styled.img`
width:120px;
height:30px;
display: ${props => (props.mode ? 'block' : 'none')};
@media (max-width : 576px){
    width:100px;
height:25px;
}
`
export const HeaderLogoDark = styled(HeaderLogoLight)`
display: ${props => (props.mode ? 'none' : 'block')};
`

export const LogoutContainer = styled.div`
display:flex;
flex-direction:row;
width: 200px;
margin:0px;
list-style-type: none;
justify-content:space-around;
@media (max-width : 768px){
   width:130px; 
}
`

export const ProfileImage = styled.img`
width:30px;
display:block;
margin-right:10px;
@media (max-width : 768px){
  display:none;  
}
`
export const LogoutButton = styled.button`
width:80px;
height:30px;
border: 1px solid;
border-color :${props => (props.mode ? '#3b82f6' : '#ffffff')};
color:${props => (props.mode ? '#3b82f6' : '#ffffff')};
background-color: ${props => (props.mode ? '#ffffff' : '#212121')};
font-weight: bold;
font-size:15px;
border-radius:5px;
@media (max-width : 768px){
    display:none;
}
`

export const StyledIconMoon = styled(FaMoon)`
width:50px;
height:25px;
margin-top:3px;
display: ${props => (props.mode ? 'block' : 'none')};
@media (max-width : 768px){
 padding:1px;

}
`
export const StyledIconSun = styled(FiSun)`
display : ${props => (props.mode ? 'none' : 'block')};
width:50px;
height:25px;
color: white;
margin-top:5px;
`
export const StyledIconMenu = styled(GiHamburgerMenu)`
display:none;

@media (max-width : 768px){
display:block;
width:50px;
height:25px;
color: ${props => (props.mode ? '#231f20' : '#ffffff')}

}`

export const StyledIconLogout = styled(FiLogOut)`
display:none;

@media(max-width:768px){
display: block;
width:50px;
height:25px;
color: ${props => (props.mode ? '#231f20' : '#ffffff')}
}
`
