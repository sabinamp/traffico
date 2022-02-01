import styled from 'styled-components';

const ThemedCard=styled.div`
border-radius: 10px; 
box-shadow:1 1px 8px rgb(0,0,0,0.25);
background-color: ${props => props.theme.backgroundcolor};
font: black;
padding: 1rem;
border-left: 8px #ee4d47 solid;
`;
ThemedCard.defaultProps = {
    theme: {
      backgroundcolor: "#fcede8"
    }
  }

 
const Card=(props)=>{    
    return (
    <ThemedCard>
            <>
            {props.children}
            </>
    </ThemedCard>);
}

export default Card;