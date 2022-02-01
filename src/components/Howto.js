import styled, {keyframes} from "styled-components";
import howtoimg from "../images/howtoapply.svg";
import slideInLeft from "react-animations/lib/slide-in-left";

const HowtoWrapper = styled.div` 
min-height: auto;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-around;
margin-left:10%;
padding: 4rem 1rem 3.5rem 0rem;
@media screen and (max-width: 640px) {      
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;     
}
`;

const HowtoH1= styled.h1`
    color: #ee4d47;
    font-family: Rubik;
    font-size: 1.5rem;
    font-weight: 700 ;
    text-align: left;     
    margin:0;
    padding-top:1rem;
    padding-bottom: 3rem;
    letter-spacing: 0.2rem;
`;
const StyledParagraph=styled.p`
color: #111;
text-align: left;
font-size: 1.1rem;
font-weight:400;   
line-height: 2.2rem;
padding:1rem 2rem 1rem 0rem;
margin-bottom:3rem;
`;
const TextWrapper = styled.div` 
min-height: auto;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: 5rem 4rem 4rem 0rem;
width: 50%;
@media screen and (max-width: 640px) {      
    width:80%;   
  }
`;

const HowtoImg=styled.img`
    margin:0;
    padding:0;
    width:auto;
    max-height:100%;
    animation: 1.5s ${keyframes(slideInLeft)} linear;
    @media screen and (max-width: 640px) {      
        width:80%;   
      }
     
`;
const Howto= () => {
    return(
        <HowtoWrapper>           
            <HowtoImg src={howtoimg} alt="how to apply"/>
            <TextWrapper>
            <HowtoH1>HOW TO APPLY</HowtoH1>
            <StyledParagraph>
            When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources.
            Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.
            </StyledParagraph>
            </TextWrapper>

        </HowtoWrapper>
    )
  };
  
  export default Howto;