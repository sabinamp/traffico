import React from 'react';

import styled, { keyframes } from 'styled-components';
import TopScene from '../images/TopScene.svg';
import mobel from '../images/mobel.svg';
import Union from "../images/Union.png";
import { slideInLeft } from 'react-animations';

const COLORS = {
  text: 'white',
  background: 'transparent',
  btncolor: '#ee4d47',
};

const HomeDiv = styled.div` 
  height: 100%;
  position:relative;
  font-size: calc(1rem + 2vmin);
  color: white;
  padding-bottom: 0rem;
 `;

const Heading= styled.h1`
    font-family: DM Serif Display;
    color: white;
    position: absolute;
    top: 24%;
    left: 14%;
    font-weight: bold;
    text-align: left;
    font-size: 6rem;
    width: 40%;
    padding:0;
    margin:0;
    line-height: 100%;
    letter-spacing: 0.05rem;
    @media screen and (max-width: 640px) {           
            font-size: 1.6rem;
            line-height:1.8rem;            
            font-weight: 300;   
            top:32%;    
        
      }
`;

const Scene = styled.img`
    margin: 0rem auto;
    padding: 0px;      
    height: auto;  
    width: 100%;    
`;

const RedMobel=styled.img`
    margin:0;
    padding-top: 4rem;
    position: absolute; 
    top: 74%;   
    left: 0;
    animation: 1.5s ${keyframes(slideInLeft)} linear;
    @media screen and (max-width: 640px) {      
            position: absolute;
            top: 74%;
            left: 0;        
      }
     
`;

 
const StButton=styled.button`
    position: absolute;
    top: 60%;
    left: 14%;
   background-color: ${COLORS.btncolor};
  font-family:Rubik;
  color:${COLORS.text}; 
  font-weight: 700;
  letter-spacing: 0.05rem;
  font-size:1rem;
  text-transform: uppercase;
  margin: 1rem 0rem;
  padding: 0.5rem;
  height: 4rem;
  border: 2px solid  ${COLORS.btncolor};
  border-radius: 8px;
  width: 16rem; 
  @media screen and (max-width: 640px) {      
    width: auto;       
    height: 3rem;
}
`;

const Home =({title})=> { 

    return (
      <HomeDiv>
        <Scene src={TopScene} width="100%" height="auto" alt="Scene"/>           
        
        <Heading>{title}</Heading>
        <RedMobel src={mobel} width="50%" alt="truck"/> 
        <StButton>GET STARTED &nbsp; <img src={Union} width="30px"alt="arrow right"/></StButton>      
      </HomeDiv>
    );
  
}

export default Home;