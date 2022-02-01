
import styled from "styled-components";
import im from "../images/icon_social/i.svg";
import fm from '../images/icon_social/f.svg';
import tm from '../images/icon_social/t.svg';

const IconsContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: baseline;
  justify-content: space-evenly;
  margin: 0rem 2rem 0 10rem;
  width: 20%;
`;

const StFooter=styled.footer`
  background: transparent; 
  font-family: Rubik;
  font-weight: 300;
  color: #402B2B;
  font-size:1rem;
  line-height: 1.3rem;
  padding: 2rem 0rem 2rem 0rem;  
  margin: 0 2rem 0 14rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width:70%;
  @media screen and (max-width: 640px) {      
    width: auto;       
    align-items: center;
    justify-content: space-between;
}
`;

const Footer = () => (
    <StFooter>Copyright &copy; {(new Date()).getFullYear()}
    <IconsContainer>
      <img src={fm} alt="Facebook icon"/>
      <img src={tm} alt="Twitter icon"/>
      <img src={im} alt="icon"/>
    </IconsContainer>
    </StFooter>
  )
  
  export default Footer;