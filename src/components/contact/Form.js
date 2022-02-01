import { useState } from "react";
import styled from "styled-components";
import StartButton from "../reusablecomp/StartButton";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 20%;
  width: 100%;
  background: #FFFFFF; 
  color: #402b2b;
`;
const StyledInput = styled.input`
  background:white;  
  border: 1px solid rgba(238, 77, 71, 0.5);
  border-radius: 5px;
  width: 100%;
  height: 3rem;
  padding: 0.6rem;
  border: 1px solid #ee4d47;
  outline: none;
  font-family:Rubik;
  color: #402B2B;
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0 2rem 0;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #ee4d47;
    /* backdrop-filter: blur(12rem); */
    font-weight: 700;
    box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.2);
  }
  &::placeholder {
    color: #402b2b;
    font-weight: 300;
    font-size: 1rem;
  }
`;

const StForm=styled.form`
background-color: white;
border: 1px solid white;
border-radius:10px;
box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);
padding: 4rem 4rem 2rem 4rem;
 
`;
const Form=(props)=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');

     const [isValidEmail, setIsValidEmail] = useState(false);
    const [isEmptyName, setIsEmptyName] = useState(true);

    const nameChangeHandler=(e)=>{ 
        const nameVal = e.target.value;
        if(nameVal.trim().length > 0){
          setName(nameVal);
          setIsEmptyName(false);
        }else{
            setIsEmptyName(true);
        }
         console.log(`name: ${name}`) 
      };

      const emailChangeHandler=(e)=>{ 
        const emailVal = e.target.value;
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(emailVal.trim().length > 3 && email.match(regex)){
          setEmail(emailVal);
          setIsValidEmail(true);
        }else{
            setIsValidEmail(false);
        }
         console.log(`email: ${email}`)  
      }; 
    return(
        <StForm>
        <InputContainer>
        <label>Name</label>
        <StyledInput type="text" /* onChange={nameChangeHandler} */ placeholder="Your Name" />
        <label>Email address</label>
        <StyledInput type="text" /* onChange={emailChangeHandler} */ placeholder="Email" />
       
        <StartButton txt="Get STARTED"/>
      </InputContainer>
    
        </StForm>
    ) 
}

export default Form;