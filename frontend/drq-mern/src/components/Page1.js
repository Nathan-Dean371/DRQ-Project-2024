import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Page1()
{
    return(
        <Container className="my-5">
            <h1>Page 1</h1>
            <p>
                This is Page 1.
            </p>

            <Form className="m-5">
                <Form.Group controlID="form1" className="mx-5 my-3">
                    <Form.Label>Form 1</Form.Label>
                    <Form.Control type="text" placeholder="Enter text"/>
                </Form.Group>

                <Form.Group controlID="form2" className="mx-5 my-3">
                    <Form.Label>Form 2</Form.Label>
                    <Form.Control type="text" placeholder="Enter text"/>
                </Form.Group>

                <Button varient="primary" type="submit">
                    submit
                </Button>
            </Form>
        </Container>
    );
}

export default Page1;