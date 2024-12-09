import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function Welcome()
{
    return( 
        <Container  data-bs-theme="dark" className="my-5">
            <h1>Welcome to DRQ-MERN-ND</h1>
            <p>
                This is a simple MERN stack application with a React frontend and an Express backend.
            </p>
            <br>
            </br>
            <h1>Features</h1>
            <ListGroup>
                <ListGroup.Item className='w-auto my-5 d-flex flex-column align-items-center 
                        justify-content-center'>
                    <h2>React frontend</h2>
                    <ListGroup data-bs-theme="light" className='w-50 '>
                        <ListGroup.Item>
                            <h3>React Bootstrap</h3>
                            <p>Using react bootstrap to theme and layout the UI</p>
                        </ListGroup.Item>

                        <ListGroup.Item><h3>React Router</h3></ListGroup.Item>

                    </ListGroup>
                </ListGroup.Item>

                <ListGroup.Item>Express backend</ListGroup.Item>

                
                
                <ListGroup.Item>Mongoose</ListGroup.Item>
            </ListGroup>


            <h2>Layout</h2>
            <ListGroup>
                <ListGroup.Item>Homepage</ListGroup.Item>
                <ListGroup.Item>
                    <h3>Entry page</h3> 
                    <p>This page allows a user to add a new entry to the connected mongoDB</p></ListGroup.Item>
                <ListGroup.Item>
                    <h3>Retrieval page</h3> 
                    <p>This page allows a user to dispaly all documents currenly in the DB,
                    also allows the user to update or delete an entry.</p>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Welcome;