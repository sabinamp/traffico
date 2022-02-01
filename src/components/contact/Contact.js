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
 `;

const BG=styled.img`
width=auto;
max-height=100%;
padding:0;
margin-top:0rem;
@media screen and (max-width: 640px) {           
  height:auto;      
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
  width:40%;  
  height:auto;  
  top: -2%;
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
width:30%;
`;

const TextContainer=styled.div`
position: absolute;
left: 14%;
top: 22%;
width: 70%;
height: auto;
@media screen and (max-width: 640px) {           
  width:95%;  
  height:auto;
  top:45%;
}
`;

const FormContainer=styled.div`
position: absolute;
left: 48%;
top: -9%;
width:36%;
height:auto;
@media screen and (max-width: 640px) {           
  width:44%;  
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