import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function Welcome()
{
    return( 
        <Container data-bs-theme="dark">
            <h1>Welcome to DRQ-MERN-ND</h1>
            <p>
                This is a simple MERN stack application with a React frontend and an Express backend.
            </p>
            <br>
            </br>
            <h2>Features</h2>
            <ListGroup>
                <ListGroup.Item>React frontend</ListGroup.Item>
                <ListGroup.Item>Express backend</ListGroup.Item>
                <ListGroup.Item>React Router</ListGroup.Item>
                <ListGroup.Item>React Bootstrap</ListGroup.Item>
                <ListGroup.Item>Mongoose</ListGroup.Item>
            </ListGroup>


            <h2>Layout</h2>
            <ListGroup>
                <ListGroup.Item>Homepage</ListGroup.Item>
                <ListGroup.Item>Page1</ListGroup.Item>
                <ListGroup.Item>Page2</ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Welcome;