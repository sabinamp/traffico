import styled from "styled-components";
import Group14 from '../images/Group14.svg';
import Rectangle9 from '../images/Rectangle9.svg';

import Questions from "./questions/Questions";

const FAQH1= styled.h1`
    color: #ee4d47;
    font-family: Rubik;
    font-style:normal;
    font-size: 1.6rem;
    font-weight: 700 ;
    text-align: left;
    line-height:1.8rem;     
    margin:0;
    letter-spacing: 0.1rem;
    color: #EE4D47;
`;

const FAQH2= styled.h2`
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4rem;
    color: #402B2B;    
    text-align: left;     
    margin:0;
    letter-spacing: 0.05rem;    
    padding:2rem 0rem 1rem 0;   
`;

const FAQHeading = styled.div` 
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: 1rem 0.5rem 0.5rem 0;
width:40%;
position:absolute;
left:0%;
top:18%;
@media screen and (max-width: 640px) {      
    width:80%;
}
 `;

const FAQPageWrapper = styled.div` 
width: 100%;
height:auto;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
position:relative;
padding-top: 2.2rem 0 3rem 0;
margin: 0 0 14% 14%;
@media screen and (max-width: 640px) {      
     min-height:100vh;
}
 `;

 const BkgDiv=styled.img` 
    width:100%;
    height:auto;
    padding-left:10rem;
    @media screen and (max-width: 640px) {     
    width:80%;
    height:auto;
}
 `;


const FaqImg=styled.img`
    width=28%;
    height: auto;
    margin:0;
    padding:0 3rem 0 0;
    position: absolute;
    right: 5%;
    top: 10%;
    @media screen and (max-width: 640px) {     
        width:40%;
        height:auto;
        top:6%;
      
    }
`;
const FAQTopWrapper=styled.div` 
min-height: auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding-top: 1rem 0 4rem 0;
@media screen and (max-width: 640px) {      
     
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
 `;



const Faq= () => {
   
    return(
        <FAQPageWrapper>
            
            <FAQTopWrapper>
                <FAQHeading>
                <FAQH1>FAQS</FAQH1>
                <FAQH2>Questions and Answers on Professional Traffic Permits:</FAQH2>
                </FAQHeading>
                <BkgDiv src={Rectangle9}></BkgDiv>
                <FaqImg src={Group14} alt="FAQ" />
            </FAQTopWrapper>
            <Questions/> 

        
        </FAQPageWrapper>
    )
  };
  
  export default Faq;