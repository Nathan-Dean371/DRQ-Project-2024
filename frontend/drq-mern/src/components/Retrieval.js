import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Retrieval()
{
    return(
        <Container className="my-5 w-75">
            <h1>Page 2</h1>
            <p>This page will display data stored in the DB</p>

            <table className="w-100">
                <p>Empty Table</p>
            </table>
            

            <button>
                Retrieve
            </button>
        </Container>
    );
}

export default Retrieval;