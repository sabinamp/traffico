import {memo} from 'react';
import QuestionInfo from "./QuestionInfo";

const QuestionList=({questions})=>{
    

    return(
        <div>
         <section>
          {questions.map((question, index) => (
            <QuestionInfo key={question.title} title={question.title} answer={question.Message}/>
          ))}
        </section>
      </div>
    );
}

export default memo(QuestionList);