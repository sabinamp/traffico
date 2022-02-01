import {  useState, memo } from "react";
import minus from '../../images/minus.svg';
import plus from '../../images/plus.svg';
import QuestionCard from "./QuestionCard";
import AnswerCard from "./AnswerCard";
import styled from "styled-components";

const StBtn = styled.button`
    margin: 0rem auto;
    padding: 0px;      
    background:transparent;
	border:none;  
`;
const QAWrapper= styled.div` 
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
`;


const QuestionInfo = ({ title, answer }) => {
	

	const [expanded, setExpanded] = useState(false)

	return (
		<QAWrapper>
		<QuestionCard>
				<p>{title}</p>&nbsp;
				<StBtn onClick={() => setExpanded(!expanded)}>
         		 {expanded ? <img src={minus} alt="minus icon" /> : <img src={plus} alt="plus icon" />}
        		</StBtn>
					
		</QuestionCard>
		{expanded && <AnswerCard> <p>{answer}</p></AnswerCard>}
		</QAWrapper>
					
	);
};

export default memo(QuestionInfo);