import styled from 'styled-components'

export const VideoListItemContainer = styled.div`
width: 300px;
height:350px;
color:#383838;
font-size:15px;
font-family:"Roboto";
margin-left:10px;
color:${props => (props.mode ? '#231f20' : '#ffffff')};
@media (max-width:576px){
    width:400px;
    height:320px;
background-color: ${props => (props.mode ? '#f1f5f9' : '#231f20')};
}
`

export const VideoThumbNailImage = styled.img`
width: 300px;
height: 170px;
@media (max-width : 576px){
width: 400px;
height: 200px;
}
`
export const TitleText = styled.p`
width:250px;
line-height: 1.5;
margin-bottom:0px;

@media (max-width : 576px){
width:300px;
}
`
export const NameTextMedium = styled(TitleText)`
margin-top:5px;
color: #606060;
display:block;

@media (max-width:576px){
display:none;
    
}
`
export const NameTextSmall = styled(TitleText)`
margin-top:2px;
color: #606060;
display:none;
width:60px;

color: #383838;
@media (max-width:576px){
display:block;
}
`

export const ViewsText = styled.p`
margin-top:5px;

`

export const ProfileImageContainer = styled.div`
display: flex;
flex-direction: row;
@media(max-width:576px){
    font-size:12px;
    width:400px;
}
`
export const ProfileTextContainer = styled.div`
display: flex;
flex-direction: column;
padding-left:10px;
width:300px;

@media(max-width:576px){
    padding-right:10px;
    font-size:15px;
    width:400px;
    height:200px;
}
`
export const ProfileImage = styled.img`
width: 40px;
height:40px;
margin-top:20px;
`
export const ViewsContainer = styled(ProfileImageContainer)`
color: #606060;

`
export const PublishedYear = styled.p`
margin-top:5px;
margin-left:10px;

`
export const Dot = styled.p``
