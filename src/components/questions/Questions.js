import { getQuestions } from "./DataService";
import { useState, useEffect, useCallback, useMemo } from "react";
import QuestionList from "./QuestionList";
import styled, { ThemeProvider } from "styled-components";
import QuestionCard from "./QuestionCard";
import plus from "../../images/plus.svg";

const StBtn = styled.button`
	margin: 0rem auto;
	padding: 0 1rem;
	background: transparent;
	border: none;
`;

const FAQListContainer = styled.div`
	min-height: auto;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	align-content: flex-start;
	justify-content: space-evenly;
	padding-top: 1rem 0 4rem 0;
	flex-wrap: wrap;
	width: 70%;
	position: absolute;
	left: 0%;
	top: 45%;
	@media screen and (max-width: 640px) {
		top: 80%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;
const Column1 = styled.div`
	width: 45%;
	height: auto;
	margin-right: 1rem;
	@media screen and (max-width: 640px) {
		width: 90%;
		height: auto;
	}
`;
const Column2 = styled.div`
	width: 45%;
	height: auto;
	margin-left: 2rem;
	@media screen and (max-width: 640px) {
		width: 90%;
		height: auto;
	}
`;

const Loadh5 = styled.h5`
	font-family: DM Serif Display;
	color: #ed4d47;
	font-weight: 700;
	text-align: center;
	font-size: 1.1rem;
	padding-left: 30%;
`;

const theme = {
	/* backgroundcolor:"#ED4D47" */
	backgroundcolor: "rgba(237, 77, 79,0.25)",
};

const Questions = () => {
	let initialfaq = () => [
		 {
			title: "What is the professional traffic permit?",
			Message:
				"Traffic permits are a requirement for conducting professional traffic.",
		},
		/*
        {
            title: "When is a professional traffic permit needed?",
        Message: "Some short text"

        },
        {
            title: "Where to look for a traffic permit?",
            Message: "Some short text"
        },
        {
            title: "Some long Title for traffico website as a ReactJS challenge for the best candidates",
            Message: "Very very very long text to see how the text is responsive. A will add some more words just to be sure we have couple of lines of text f"
        },
        {
            title: "2. Where to look for a traffic permit?",
            Message: "Some short text"
        },
        {
            title: "2. Where to look for a traffic permit?",
            Message: "Some short text"
        } */
	];

	const [faq, setFaq] = useState(initialfaq);
	const [displayedFaq, setDisplayedFaq] = useState([]);
	const [nextQuestionNumber, setNextQuestionNumber] = useState(4);
	const getQuestion = useMemo(
		(qnumber) => {
			return faq[qnumber];
		},
		[faq]
	);

	const displayNextQuestion = useCallback(() => {
		let item = faq[nextQuestionNumber];
		console.log(item);
		if (item) {
			console.log("next question: " + item.title);
			const newQInfos = [...displayedFaq, item];
			setDisplayedFaq(newQInfos);
			setNextQuestionNumber(nextQuestionNumber + 1);
		} else {
			console.log("no data received");
		}
	}, [displayedFaq, nextQuestionNumber, getQuestion]);


	const getAllQuestions= useCallback(()=>{
		console.log('fetching data...')
		getQuestions()
			.then((qdata) => {
				console.log(qdata);
				qdata ? setFaq(qdata) : console.log("missing question data");			
			})
			.catch((e) => console.error(e));
	},[]);

	useEffect(() => {
		console.log("use effect running");		
		getAllQuestions();		
		
	}, [faq, getAllQuestions]);

    useEffect(()=>{
        console.log("useEffect running-set displayedFaq");
        const first6Questions = faq.slice(0, 6);
		(faq.length >0) && setDisplayedFaq(first6Questions);
		console.log(displayedFaq);
    }, [faq]);

	return (
		<div>
			{faq.length > 0 ? (
				<FAQListContainer>
					<Column1>
						<QuestionList questions={displayedFaq.slice(0, 3)}></QuestionList>
					</Column1>
					<Column2>
						<QuestionList questions={displayedFaq.slice(3, 6)}></QuestionList>
						<ThemeProvider theme={theme}>
							<QuestionCard>
								<Loadh5>LOAD MORE </Loadh5>&nbsp;
								<StBtn onClick={() => displayNextQuestion()}>
									<img src={plus} alt="plus icon" />
								</StBtn>
							</QuestionCard>
						</ThemeProvider>
					</Column2>
				</FAQListContainer>
			) :(
				<FAQListContainer>
					<Column1> 	<p>no existing question info</p> </Column1>
					<Column2>
					    <ThemeProvider theme={theme}>
							<QuestionCard>
								<Loadh5>LOAD MORE </Loadh5>&nbsp;
								<StBtn onClick={() => displayNextQuestion()}>
									<img src={plus} alt="plus icon" />
								</StBtn>
							</QuestionCard>
						</ThemeProvider>
					</Column2>
				</FAQListContainer>
			
			)}
		</div>
	);
};

export default Questions;