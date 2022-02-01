import styled from 'styled-components';

const QCard=styled.div`
border-radius: 10px; 
background-color: ${props => props.theme.backgroundcolor};
color: #402B2B;
padding: 1rem 1.5rem 1rem 1.5rem;
margin:1rem 1rem 0.2rem 1rem;
border-radius: 10px;
box-shadow: 0px 20px 40px rgba(238,77,71,0.1);
font-family:Rubik;
font-weight:500;
font-size:1.1rem;
letter-spacing:0.02rem;
color:#402B2B;
width: 26rem;
height: 4rem;
display:flex;
flex-direction:row;
align-items:baseline;
justify-content:center;
`;

QCard.defaultProps = {
    theme: {
      backgroundcolor: "#fff"
    }
  }

 
const QuestionCard=(props)=>{    
    return (
    <QCard>
            <>
            {props.children}
            </>
    </QCard>);
}

export default QuestionCard;