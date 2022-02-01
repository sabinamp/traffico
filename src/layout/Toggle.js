import styled from "styled-components";

import {FaBars} from 'react-icons/fa';

const StToggle=styled(FaBars)`
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
height:auto;
`;

const Toggle=({toggleNav})=>{
    return(
        <StToggle  alt="menu button" onClick={toggleNav}>
          <FaBars/>
        </StToggle>)
}

export default Toggle;