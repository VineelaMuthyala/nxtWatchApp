import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const SavedVideoThumbnailContainer = styled.div`
display : flex;
flex-direction: row;
padding: 50px;
`

export const SavedThumbnailImage = styled.img`
    width: 400px;
    height: 200px;
}
`
export const SavedThumbnailTextContainer = styled.div`
width: 350px;
padding-left: 20px;
`
export const SavedThumbnailTitle = styled.h1`
font-size: 20px;
line-height: 1.5;
`
export const SavedThumbnailName = styled.p`
    margin-bottom: 0px;
    font-weight: 600;
font-size:15px;
color: #64748b;
`
export const ViewsContainer = styled.div`
display:flex;
flex-direction : row;
justify-content: space-between;
align-self: flex-start;
width: 200px;
font-weight: 600;
font-size:15px;
color: #64748b;

`
export const ViewCountText = styled.p``
export const StyledDot = styled(BsDot)`
margin-top: 10px;
    width: 30px;
    height: 30px;
`
export const YearText = styled.p``
