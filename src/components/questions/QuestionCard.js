import styled from 'styled-components';
const QCardCOLORS = {
    text: '#402B2B',
    background: 'white',
    border: '#ee4d47',
  };

const QCard=styled.div`
border-radius: 10px; 
box-shadow: 0px 20px 40px rgba(238, 77, 71, 0.1);
background-color: ${QCardCOLORS.background};
font: black;
padding: 1.2rem;
border-left: 8px ${QCardCOLORS.border} solid;
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 1.2rem;
line-height: 30px;
/* or 167% */
display: flex;
align-items: center;
color: ${QCardCOLORS.text};;
`;


const Card=(props)=>{    
    return (
    <QCard>
            <>
            {props.children}
            </>
    </QCard>);
}

export default Card;