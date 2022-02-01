import styled from 'styled-components';
const ACardCOLORS = {
    text: '#402B2B',
    background: '#fcede8',
    border: '#fcede8',
  };


  const ACard=styled.div`
border-radius: 0px 0px 10px 10px; 
box-shadow:0 20px 40px rgba(238,77,71,0.1);
background-color: ${ACardCOLORS.background};
font: black;
padding: 1rem 1.5rem 1rem 1.5rem;
margin:-1rem 1rem 0rem 1rem;
border: 0 1px 1px 1px ${ACardCOLORS.border} solid;
width: 26rem;
height: 8rem;
color:${ACardCOLORS.text};
font-family: Rubik;
font-weight:300;
font-size:1rem;
`;


const AnswerCard=(props)=>{    
    return (
    <ACard>
            <>
            {props.children}
            </>
    </ACard>);
}

export default AnswerCard;
