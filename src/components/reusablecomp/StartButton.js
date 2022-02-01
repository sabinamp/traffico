import styled from "styled-components";
import Union from '../../images/Union.png';

const BTNCOLORS = {
    text: 'white',
    background: 'transparent',
    btncolor: '#ee4d47',
  };
const GetStButton=styled.button`
background-color: ${BTNCOLORS.btncolor};;
font-family:Rubik;
color:${BTNCOLORS.text}; 
font-weight: 700;
letter-spacing: 0.05rem;
font-size:1rem;
text-transform: uppercase;
margin: 1rem 0 1rem 0;
padding: 0.5rem;
height: 4rem;
border: 2px solid #ee4d47;
border-radius: 8px;
width: 14rem;
@media screen and (max-width: 640px) {      
width: auto;       
height: 3rem;
}
`;

const StartButton= ({txt})=>{
    return ( <GetStButton>{txt}  &nbsp; &nbsp;<img src={Union} width="30px"alt="arrow right"/>
     </GetStButton>)
}

export default StartButton;