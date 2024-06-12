import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'

export const LeftContainer = styled.div`
width:20vw;
height:90vh;
display:flex;
flex-direction:column;
justify-content:space-between;
color :${props => (props.mode ? '#424242' : '#ffffff')};
background-color:${props => (props.mode ? '#ffffff' : '#212121')};
padding-left:15px;
@media (max-width : 768px){
  display: none;
}
`
export const OptionsUnorderedList = styled.ul`
list-style-type: none;
padding:0px;
`
export const OptionsList = styled.li`
width:25vw;
height:45px;

`
export const StyledIconHome = styled(AiFillHome)``
export const LabelText = styled.label`
margin-left:20px;
font-weight:bold;`

export const StyledIconTrending = styled(HiFire)``

export const StyledIconGaming = styled(SiYoutubegaming)``

export const StyledIconSave = styled(BiListPlus)`
width:20px;
height:20px;
`
export const ContactUsContainer = styled.div``
export const ContactUsHeading = styled.h1`
font-size:17px;
font-weight:bold;

`
export const ContactUsIconsContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:120px;
margin-top:20px;
margin-bottom:20px;
`
export const ContactIconsImage = styled.img`
width:30px;
height:30px;

`
export const ContactText = styled.p`
width: 180px;
font-weight:bold;

`
export const StyledLink = styled(Link)`
    text-decoration: none;
    `
