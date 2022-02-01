import styled, {keyframes} from 'styled-components';
import Card from './Card';
import aboutus from '../images/aboutus.png';
import { slideInRight } from 'react-animations';

const AboutWrapper = styled.div` 
  min-height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 5rem;
  padding-top:4rem;
  margin-top:15%;
  margin-left: 14%;
  @media screen and (max-width: 640px) {      
    flex-direction: column;
    align-items: center;
    justify-content: space-between;     
}
`;

const TextWrapper = styled.div` 
min-height: auto;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding-bottom: 4rem;
padding-top: 5rem;
width: 48%;
@media screen and (max-width: 640px) {      
  width:80%;   
}
`;

const AboutH1= styled.h1`
    color: #ee4d47;
    font-family: Rubik;
    font-size: 1.5rem;
    font-weight: 700 ;
    text-align: left;     
    margin:0;
    letter-spacing: 0.2rem;
`;

const StyledP1=styled.p`
color: #111;
text-align: left;
font-size: 1.1rem;
font-weight:400;   
line-height: 2.2rem;
padding:1.5rem 2rem 1rem 0rem;
margin-bottom:3rem;
`;

const StyledP2=styled.p`
color: black;
font-weight: 600;
text-align: left;
font-size: 1.6rem;   
line-height: 2rem;
padding:0rem 2rem 0rem 0rem;
margin-left:1rem;
`;



const AboutImg=styled.img`
width=28%;
height: auto;
margin:0;
padding-top:0;
position: relative;
animation: 1.6s ${keyframes(slideInRight)} linear;
@media screen and (max-width: 640px) {      
     width: 60%;
     height:auto;
}
`;


 const About = ()=>{
     return(
         <div>             
             <AboutWrapper>               
                 <TextWrapper>
                    <AboutH1>ABOUT US</AboutH1>
                    <StyledP1>The occupational traffic permit is one of the most important things in the company when carrying out freight transport. In fact,
                        it is a prerequisite for doing business traffic at all.
                    </StyledP1>
                    <Card >
                    <StyledP2> How do you do when you need to obtain a commercial traffic permit for freight transport to your business?</StyledP2>
                    </Card>
                </TextWrapper>
                
                <AboutImg src={aboutus}  alt="about us"/>                  
                
                           
            </AboutWrapper>
         </div>
   
     )

    
};
export default About;