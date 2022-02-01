import styled from "styled-components";
import logo from "../images/logo.svg";


import { Link } from 'react-router-dom';



const PosNavBar=styled.nav`
position: absolute;
bottom: 18%;
left: 14%;
width: auto;
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: space-between;
margin: 1rem 0;
@media screen and (max-width: 640px) {      
    position: absolute;
    bottom: 6%;
    left: 6%; 
    flex-direction: column;
    align-items: center;
    justify-content: center;   
}
`;
const TLogo = styled.img`
    margin: 0rem auto;
    margin-right: 32rem;      
    width: auto; 
    max-height: 100%; 
    
`;
const StButton=styled.button`
color:white; 
font-family: Rubik;
font-weight: 400;
line-height:1rem;
text-align: center;
letter-spacing: 0.05rem;
text-transform: uppercase;
width: auto;
font-size:1rem;
margin: 0.5rem 5rem 0.5rem 0rem;
padding: 0.5rem 0.5rem;
background-color: transparent;
border:none;
cursor: pointer;
&:hover {
    color:#ee4d47;
  }
`;

 const NavBar=(params)=> {
     return(        
            <PosNavBar>
              <TLogo src={logo} alt="logo"/>  
                            
              <Link to="/about"> <StButton>ABOUT</StButton></Link>
              <Link to="/howtoapply"> <StButton>HOW TO</StButton></Link>
              <Link to="/faq"> <StButton>FAQS</StButton></Link>         
               
            </PosNavBar>
              
        
     );
    
};

export default NavBar;