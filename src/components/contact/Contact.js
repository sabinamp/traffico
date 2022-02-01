import styled, {keyframes, ThemeProvider} from "styled-components";
import BottomNavBar from "../../layout/BottomNavBar";
import bkg from '../../images/BG.svg';
import group35 from '../../images/Group35.svg';
import Form from './Form';
import { slideInLeft } from 'react-animations';
import Card from "../reusablecomp/Card";


const ContactDiv = styled.div` 
  height: 100%;
  position:relative;
  color: white;
  margin-top: 8rem;
  padding-bottom: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-contact: center;
  @media screen and (max-width: 640px) {   
    flex-direction: column;
    align-items: center;
    justify-contact: center;        
    min-height:100vh;      
  }
  `;

const BG=styled.img`
width=90%;
height=auto;
padding:0;
margin-top:0rem;
@media screen and (max-width: 640px) {           
  min-height:100vh;    
    
}
`;

const G35=styled.img`
width=auto;
max-height=100%;
padding:0rem;
margin:0rem;
position: absolute;
left: 0%;
top: -20%;
animation: 1.5s ${keyframes(slideInLeft)} linear;
@media screen and (max-width: 640px) {           
  width:50%;  
  height:auto;  
  top: -8%;
}
`;

const StyledP3=styled.p`
color: white;
text-align: left;
font-size: 1.2rem;
font-family: Rubik;
font-weight:400;   
line-height: 2.1rem;
padding:0.5rem 2rem 0.5rem 0rem;
margin:0rem 3rem 0rem 2rem;

`;

const TextContainer=styled.div`
position: absolute;
left: 14%;
top: 22%;
width: 30%;
height: auto;
margin:1rem 1rem 1rem 0;
@media screen and (max-width: 640px) {           
  width:95%;  
  height:auto;
  top:55%;
}
`;

const FormContainer=styled.div`
position: absolute;
left: 48%;
top: -9%;
width:36%;
height:auto;
@media screen and (max-width: 640px) {    
   left:25%;       
  width:70%;  
  top: 10%;
  height: auto;
  
  
}
`;
const theme={backgroundcolor:"transparent"};

 const Contact= () => {
  return(
      <ContactDiv>   
         <BG src={bkg} width="auto" alt="blue background"/>         
        <G35 src={group35} alt="red mobel"/>   
        <FormContainer>
        <Form></Form>
        </FormContainer>      
       
        <TextContainer>
        <ThemeProvider theme={theme}>
          <Card >
          <StyledP3> We provide traffic management consultants so you get started quickly, contact us for a quote today.</StyledP3>
          </Card>
          </ThemeProvider>
        </TextContainer>       
        <BottomNavBar/>
      </ContactDiv>
  )
};

export default Contact;