import {Button, Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {QuestionApi} from "../api/QuestionApi";
import {Question} from "../Question";

const LandingPage: React.FC = () => {

    const [data, setData] = useState({})

    const newQuestion: Question = {
        numberOfQuestions: 10
    }

    useEffect(() => {
            QuestionApi.getQuestions(newQuestion)
                .then(response => {
                    setData(response)
                    console.log(response.data.results);
                })
        }
    , [])
    
    return (
        <Container>
            <h1>Welcome to quiz game</h1>
            <h3>Would you like to start?</h3>
            <Button variant={"success"}>YES</Button>
            <Button variant={"danger"}>NO</Button>
            <Container>

            </Container>
        </Container>
    )
}

export default LandingPage
