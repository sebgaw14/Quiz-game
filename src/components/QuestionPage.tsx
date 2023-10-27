import React, {useEffect, useState} from "react";
import {QuestionApi} from "../api/QuestionApi";
import {QuestionDto} from "../model/QuestionDto";
import {Question} from "../model/Question";
import QuizPage from "./QuizPage";

const QuestionPage = () => {

  const [data, setData] = useState<QuestionDto[]>([])

  const newQuestion: Question = {
    numberOfQuestions: 10
  }

  useEffect(() => {
        QuestionApi.getQuestions(newQuestion)
            .then(response => {
              setData(response.data.results)
            })
      }
      , [])

  return (
      <>
          {data.length > 0 ? (
              <QuizPage data={data} />
          ) : (
              <p>Pobieranie danych...</p>
          )}
      </>
  )
}

export default QuestionPage
