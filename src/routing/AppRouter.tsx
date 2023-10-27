import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "../components/LandingPage";
import QuestionPage from "../components/QuestionPage";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/questions" element={<QuestionPage />} />
            </Routes>
        </BrowserRouter>
    )
}
