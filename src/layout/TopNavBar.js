import styled from "styled-components";
import logo from "../images/logo.svg";
import Toggle from '../layout/Toggle';
import { useState } from 'react';
import useMatchMedia from '../components/reusablecomp/useMatchMedia';
import { Link } from 'react-router-dom';
import { FaTimes} from 'react-icons/fa';

const ContactButton=styled.button`
position: absolute;
left: 92%;
background-color: #ee4d47;
color:white; 
font-family: Rubik;
font-weight: 600;
font-size:1rem;
line-height:1.1rem;
letter-spacing: 0.05rem;
text-transform: uppercase;
margin: 0rem 0rem 0rem 4rem;
padding: 1rem 0.5rem 1rem 0.5rem;
border: 1px solid #ee4d47;
border-radius: 5px;
display: block;
width: 10rem;
cursor: pointer;
&:hover {
    border:1px solid white;
  }
@media screen and (max-width: 640px) { 
  left:50%;
  top:70vh;
  line-height:1.6rem;
  font-size:1.4rem; 
  width: 13rem;
 }
`;

const PosNavBar=styled.nav`
position: absolute;
top: 5%;
left: 15%;
width: auto;
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: space-between;
@media screen and (max-width: 640px) {  
  position: absolute; 
  top: 0%;
  left: 0%;   
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  color: white;  
  background-color: rgba(238,77,71,0.85);
  width:76%;
  height:100vh;
  z-index:99;
  visibility:${props => props.visibility} ;
}
`;
const TLogo = styled.img`
    margin: 0rem auto;
    margin-right: 17rem;      
    width: auto; 
    max-height: 100%; 
    @media screen and (max-width: 640px) {      
     width:70%;
     height:auto;   
     margin-right:2rem;
     margin-left:2rem;
     position: absolute;  
     left:10%;   
     top: 20%;
  }
    
`;
const StButton=styled.button`
color:white; 
font-family: Rubik;
font-weight: 600;
line-height:1rem;
font-size:1rem;
text-align: center;
letter-spacing: 0.05rem;
text-transform: uppercase;
width: auto;
margin: 0.5rem 6rem 0.5rem 0rem;
padding: 0.5rem 0.5rem;
background-color: transparent;
border:none;
cursor: pointer;
&:hover {
    color:#ee4d47;
  }
  @media screen and (max-width: 640px) {      
    
     font-size:1.6rem; 
     line-height:1.6rem;          
 }
`;


const CloseToggle=styled(FaTimes)`
position:fixed;
top: 1%;
left: 3%;
color: rgba(238,78,71,0.95);
font-size:2rem;
background: white;
padding:0.75rem;
cursor:pointer;
display: flex;
place-items:center;
width: 4rem;
height: auto;
`;

 const NavBar=()=> {
  const [navToggled, setNavToggled]=useState(true);
  const isMobileView= useMatchMedia('(max-width: 640px)', false);
  
  const toggleNav=()=>{
    if(isMobileView){
      setNavToggled(!navToggled);  
       
    }    
    console.log("toggling nav");
  }

    const closeMobileMenu=()=>{
      if(isMobileView){
        setNavToggled(!navToggled);
       
        console.log("closing nav");
      }    
      
    }

    return( 
       <div>
              {isMobileView && !navToggled &&<Toggle toggleNav={toggleNav}/>}               
               
              <PosNavBar visibility={`${navToggled? 'visible': 'hidden'}`}>
              {isMobileView && navToggled && <CloseToggle onClick={closeMobileMenu} ><FaTimes/></CloseToggle> }
               <TLogo src={logo} alt="logo"/> 
               
               <Link to="/about"> <StButton>ABOUT</StButton></Link>
               <Link to="/howtoapply"> <StButton>HOW TO</StButton></Link>
               <Link to="/faq"> <StButton>FAQS</StButton></Link>
               <Link to="/contact"> <ContactButton>CONTACT US </ContactButton> </Link>             
                
             </PosNavBar>
    </div>      
           
              
        
     );
    
};

export default NavBar;