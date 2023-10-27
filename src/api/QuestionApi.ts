import {Question} from "../model/Question";
import axios from "axios";

export class QuestionApi {
    static getQuestions = async (question: Question) => {

        const displayErrorMessage = (response: number) => {
            switch (response) {
                case 1: console.error("No Results. Could not return results. The API doesn't have enough questions for your query. ")
                    break
                case 2: console.error("Invalid Parameter. Contains an invalid parameter. Arguments passed in aren't valid.")
                    break
                case 3: console.error("Token Not Found. Session Token does not exist.")
                    break
                case 4: console.error("Token Empty. Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.")
                    break
            }
        }

        const amount: number = question.numberOfQuestions

        return await axios.get("https://opentdb.com/api.php",{
            params: {
                amount: amount
            }
        })
            .then(response => {
                console.log(response);
                if (response.data.response_code !== 0) {
                    displayErrorMessage(response.data.response_code)
                }
                if (response.status !== 200) {
                    throw new Error("Network response was not ok")
                }
                return response
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                throw error
            })

    }
}
