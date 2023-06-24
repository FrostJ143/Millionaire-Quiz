import { useEffect, useRef, useState } from "react";

function Timer({ setStop, setQuestionNumber, questionNumber, isChoose }) {
    const [countdown, setCounDown] = useState(30);

    const intervalID = useRef();

    useEffect(() => {
        if (countdown === 0) {
            return setStop(true);
        }
        intervalID.current = setInterval(() => {
            setCounDown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalID.current);
        };
    }, [countdown, setStop]);

    useEffect(() => {
        setCounDown(30);
    }, [questionNumber]);

    useEffect(() => {
        isChoose && clearInterval(intervalID.current);
    }, [isChoose]);

    return countdown;
}

export default Timer;
