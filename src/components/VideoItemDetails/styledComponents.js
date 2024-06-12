import styled from 'styled-components'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'
import ReactPlayer from 'react-player'

export const VideoItemDetailsView = styled.div`
@media (max-width: 576px){
    
}
`
export const VideoItemContainer = styled.div`
display : flex;
flex-direction : row;

`

export const VideoItemDetailsContainer = styled.div`
    padding-top: 20px;
    margin-right: 20px;
    background-color:${props => (props.mode ? '#f1f5f9' : '#181818')};
    width:75vw;
    height: 776px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    @media (max-width: 576px){
        height: 800px;
        width: 1000px;
    }
`

export const TitleText = styled.p`
    align-self: flex-start;
    margin-left: 35px;
    margin-top: 30px;
    font-weight: 600;
    color:${props => (props.mode ? '#231f20' : '#ffffff')};
    @media (max-width: 576px){
        font-size:35px;
        width: 700px;
    }
`
export const ViewsAndLikesContainer = styled.div`
display:flex;
flex-direction : row;
justify-content: space-between;
align-self: flex-start;
width: 900px;
margin-left:20px;
@media (max-width: 576px){
    flex-direction : column;
}
`
export const ViewsContainer = styled(ViewsAndLikesContainer)`
width: 250px;
margin-left: 20px;
color: #64748b;
font-weight: 600;
font-size:15px;
justify-content: flex-start;
@media (max-width: 576px){
    flex-direction : row;
    font-size:20px;
    width: 500px;
}
`
export const ViewCountText = styled.p`
    width: 200px;
    font-size: 15px;
    @media(max-width:576px){
        width: 180px;
    font-size: 30px;
    }
`
export const YearText = styled.p`
width: 200px;
margin-left: 10px;
ont-size: 15px;
@media(max-width:576px){
     width: 180px;
    font-size: 30px;
}
`
export const LikesContainer = styled(ViewsAndLikesContainer)`
justify-content:flex-end;
color: #64748b;
font-weight: 600;
margin-top: 10px;
height:50px;
align-items: center;
@media (max-width: 576px){
    flex-direction : row;
    justify-content: flex-start;
    
}
}
`
export const StyledLikeIcon = styled(AiOutlineLike)`
width: 20px;
height: 20px;
@media (max-width:576px){
 width: 50px;
height: 50px;
}
`
export const StyledDisLikeIcon = styled(BiDislike)`
width: 20px;
height: 20px;
@media (max-width:576px){
 width: 50px;
height: 50px;
}
`
export const StyledSaveIcon = styled(CgPlayListAdd)`
width: 20px;
height: 20px;
@media (max-width:576px){
    width: 50px;
    height: 50px;
}
`
export const StyledSpan = styled.p`
    margin-left: 5px;
    font-size: 15px;
    margin-top: 0px;
    @media(max-width:576px){
        font-size : 30px;
        margin-bottom:0px;
    }
`

export const ReactPlayerContainer = styled.div`
width: 900px;
height: 800px;

@media (max-width : 576px){
  height: 500px;
}
`
export const ReactPlayerVideo = styled(ReactPlayer)`

height: 500px;
}
 `
export const ChannelContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    align-self: flex-start;
`
export const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-top: 10px;
}
`
export const ProfileTextConatiner = styled.div`
margin-left: 20px;
font-weight: 600;
height: 150px;
`
export const ProfileTextName = styled.p`
height: 10px;
font-size:15px;
color:${props => (props.mode ? '#231f20' : '#ffffff')};
`
export const ProfileTextsubscriberCount = styled.p`
font-size:12px;
color: #64748b;
margin-bottom: 30px;

`
export const ProfileTextDescriptionSmall = styled(ProfileTextName)`
color:${props => (props.mode ? '#231f20' : '#ffffff')};
display:none;
@media(max-width:576px){
    display:block;
    font-size:30px;
    color: #64748b;
    line-height: 1.5;
    height: 100px;
    width: 500px;
    padding-left:20px;
}

`
export const ProfileTextDescriptionLarge = styled(ProfileTextName)`
margin-right: 20px;
    font-size: 15px;
    color: #64748b;
    line-height: 1.5;
    display:block
   color:${props => (props.mode ? '#231f20' : '#ffffff')};
   @media(max-width:576px){
    display:none;
   }
`
export const StyledIconContainer = styled.button`

display: flex;
flex-direction: row;
border:0px;
background-color:${props => (props.mode ? '#f1f5f9' : '#181818')};
color : ${props => (props.likeColor ? '#3b82f6' : '#64748b')};
@media(max-width:576px){
width: 200px;
justify-content:flex-start;
align-items:center;

}
`
export const StyledIconContainerDisLike = styled(StyledIconContainer)`
color : ${props => (props.dislikeColor ? '#3b82f6' : '#64748b')};
`
export const StyledIconContainerSave = styled(StyledIconContainer)``
export const StyledIconContainerSaved = styled(StyledIconContainer)`
color:#3b82f6;
`
export const ProfileChannelConatiner = styled.div`
diaplay:flex;
flex-dirextion:column;
@media(max-width:576px){
   diaplay:flex;
flex-dirextion:column; 
align-self: flex-start;
}
`
