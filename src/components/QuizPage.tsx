import {Container} from "react-bootstrap";
import React, {useState} from "react";
import {QuizPageProps} from "../model/QuizPageProps";
import {QuestionDto} from "../model/QuestionDto";
import {NavigateFunction, useNavigate} from "react-router-dom";


const QuizPage: React.FC<QuizPageProps> = ({data}): React.ReactElement => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const navigate: NavigateFunction = useNavigate()

    const question: QuestionDto = data[currentQuestion]

    const answers: string[] = [...question.incorrect_answers, question.correct_answer]

    answers.sort(() => Math.random() - 0.5) // Fisher-Yates algorithm

    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswer(answer)
    }

    const handleNextQuestion = () => {

        if (currentQuestion < data.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer('')
        }
    }

    const decodeHtmlEntities = (html: string): string => {
        return html
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/&#039;/g, "'")
            .replace(/&amp;/g, '&');
    }

    const handleFinishQuiz = () => {
        navigate("/")
    }

    return (
        <Container>
            {currentQuestion < data.length ? (
                <div>
                    <h3>{decodeHtmlEntities(question.question)}</h3>
                    <p>{question.category}</p>
                    <div>
                        {answers.map((answer, i) => (
                            <div key={i}>
                                <label htmlFor={`answer-${i}`}>{answer}</label>
                                <input
                                    id={`answer-${i}`}
                                    type="radio"
                                    value={answer}
                                    name="selectedAnswer"
                                    className="p-2"
                                    onChange={() => handleAnswerSelect(answer)}
                                    checked={selectedAnswer === answer}
                                />
                            </div>
                        ))}
                    </div>
                    {currentQuestion < data.length - 1 ? (
                        <button onClick={handleNextQuestion}>Następne pytanie</button>
                    ) : (
                        <button onClick={handleFinishQuiz}>Finish Quiz</button>
                    )}
                </div>
            ) : (
                <p>Quiz zakończony</p>
            )}
        </Container>
    )
}

export default QuizPage
