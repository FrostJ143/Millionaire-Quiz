import { useEffect, useState, useRef, memo } from "react";

function Triviva({ data, setStop, setQuestionNumber, setIsChoose }) {
    const [chosenAnswer, setChosenAnswer] = useState();
    const [className, setClassName] = useState("answer");

    const handleClick = (answer) => {
        setChosenAnswer(answer);
        setClassName("answer active");
        setIsChoose(true);
        setTimeout(() => {
            setClassName(answer.correct ? "answer correct" : "answer wrong");
            setTimeout(() => {
                if (answer.correct) {
                    setQuestionNumber((prev) => prev + 1);
                    setChosenAnswer(null);
                } else {
                    setStop(true);
                }
            }, 3000);
        }, 3000);
    };

    return (
        <div className="triviva">
            <div className="question">{data?.question}</div>
            <div className="answers">
                {data?.answers.map((answer) => {
                    return (
                        <div key={answer.text} onClick={() => handleClick(answer)} className={chosenAnswer === answer ? className : "answer"}>
                            {answer.text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(Triviva);
