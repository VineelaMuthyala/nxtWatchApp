import styled from 'styled-components'

export const LoginContainer = styled.div`
height:100vh;
width:70vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media screen and (max-width: 768px) {
justify-content:flex-start;
align-items:flex-start;
margin-left:10px;
}
`
export const LoginForm = styled.form`
width:430px;
height:450px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
display:flex;
flex-direction:column;
padding:40px;
@media screen and (max-width: 768px) {
margin-top:100px;
width:350px;
height:400px;
font-family: 'Roboto'
}`
export const NxtwatchLogo = styled.img`

margin-bottom:50px;
width:200px;
height:50px;
align-self: center;
@media screen and (max-width: 768px) {
width:120px;
height:30px;
margin-bottom:25px;
}`

export const LoginInputContainer = styled.div`
display:flex;
flex-direction:column;
margin-bottom:10px;
align-self:flex-start;
@media screen and (max-width: 768px){
    
}
`
export const UserName = styled.label`
font-weight:bold;
color:#606060;
font-size:13px;
margin-bottom:10px;
@media screen and (max-width: 768px){
    
}
`
export const UsernameInput = styled.input`
border: 1px solid #cbd5e1;
width:350px;
height:40px;
padding-left:10px;
font-weight:bold;
@media screen and (max-width: 768px){
width:270px;
}
`
export const ShowPasswordContainer = styled.div`
display:flex;
flex-direction:row;
@media screen and (max-width: 768px){

}
`
export const InputCheckBox = styled.input`
width: 15px;
height:15px;
margin-right:10px;
@media screen and (max-width: 768px){

}
`
export const ShowPasswordText = styled(UserName)`
font-size:15px;
@media screen and (max-width: 768px){
    
}
`
export const LoginButton = styled.button`
width:350px;
height:40px;
color:#ffffff;
background-color: #3b82f6;
border: 0px;
border-radius:5px;
margin-top:20px;
font-weight:bold;
font-size:15px;
@media screen and (max-width: 768px){
width:270px;
margin-top:15px;
}
`
export const ErrorMessage = styled.p`
color: #ff0000;
font-size:14px;
margin-top:3px;
@media screen and (max-width: 768px){

    }
`
