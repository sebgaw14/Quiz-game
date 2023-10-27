import {Button, Container} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const LandingPage: React.FC = () => {

    return (
        <Container>
            <h1>Welcome to quiz game</h1>
            <h3>Would you like to start?</h3>
            <Link to="/questions">
                <Button variant={"success"}>YES</Button>
            </Link>
            <Button variant={"danger"}>NO</Button>
        </Container>
    )
}

export default LandingPage
