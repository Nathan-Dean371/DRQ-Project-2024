import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";

function Entry()
{
    // Declare state variables for title, movieYear, and moviePoster
    const [fullname, setFullname] = useState('');
    const [occupation, setOccupation] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        console.log("Form submitted");

        axios.post("http://localhost:4000/new-entry", {
            Fullname: fullname,
            Occupation: occupation,
            Dob: dob
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }


    return(
        <Container className="w-25 ">
            <h1>Entry page</h1>
            <p>
                Enter the details of the person you want to add to the database.
            </p>

            <Form className=" position-relative start-00 " onSubmit={handleSubmit}>
                <Form.Group controlID="fullname" className="mx-5 my-3">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control type="text" placeholder="Enter text" value={fullname} onChange={(event) => setFullname(event.target.value)}/>
                </Form.Group>

                <Form.Group controlID="occupation" className="mx-5 my-3">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control type="text" placeholder="Enter text" value={occupation} onChange={(event) => setOccupation(event.target.value)}/>
                </Form.Group>

                <Form.Group controlID="dob" className="mx-5 my-3">
                    <Form.Label>D.O.B</Form.Label>
                    <Form.Control type="date" value={dob} onChange={(event) => setDob(event.target.value)}/>
                </Form.Group>

                <Button varient="primary" type="submit">
                    submit
                </Button>
            </Form>
        </Container>
    );
}

export default Entry;