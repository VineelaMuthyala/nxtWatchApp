import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

export const SavedVideosPage = styled.div`
display:flex;
flex-direction:row;

`
export const SavedVideoContainer = styled.div`
background-color:${props => (props.mode ? '#f1f5f9' : '#231f20')};
width: 75vw;
`
export const SavedText = styled.p``

export const SavedVideoHeadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px;
    align-items: center;
    background-color:${props => (props.mode ? '#e2e8f0' : '#212121')};
    padding-left: 20px;
`
export const SavedVideoHeading = styled.h1`
    font-size: 20px;
    padding-left: 20px;
    color:${props => (props.mode ? '#231f20' : '#ffffff')};
`
export const StyledIconConatiner = styled.div`
background-color:${props => (props.mode ? '#f1f5f9' : '#181818')};
border-radius: 50px;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const StyledIconSave = styled(HiFire)`
color: red;
width: 30px;
height: 30px;
`
