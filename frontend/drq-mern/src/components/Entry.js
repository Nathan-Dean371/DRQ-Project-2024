import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Entry()
{
    return(
        <Container className="w-25 ">
            <h1>Entry page</h1>
            <p>
                Enter the details of the person you want to add to the database.
            </p>

            <Form className=" position-relative start-00 ">
                <Form.Group controlID="name" className="mx-5 my-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter text"/>
                </Form.Group>

                <Form.Group controlID="occupation" className="mx-5 my-3">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control type="text" placeholder="Enter text"/>
                </Form.Group>

                <Form.Group controlID="dob" className="mx-5 my-3">
                    <Form.Label>D.O.B</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>

                <Button varient="primary" type="submit">
                    submit
                </Button>
            </Form>
        </Container>
    );
}

export default Entry;