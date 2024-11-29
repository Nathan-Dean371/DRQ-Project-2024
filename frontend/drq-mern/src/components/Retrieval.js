import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Retrieval()
{
    function handleRetrieve()
    {
        axios.get("http://localhost:4000/retrieve").then((response) => 
            {
                console.log(response);
                const table = document.querySelector(".retrivelDisplayTable");
                table.innerHTML = "<tr><th>Name</th><th>Occupation</th><th>DOB</th></tr>";
                for(const person of response.data)
                    {
                        console.log(person);
                        var row = table.insertRow();
                        var cell1 = row.insertCell();
                        var cell2 = row.insertCell();
                        var cell3 = row.insertCell();

                        cell1.innerHTML = person.name;
                        cell2.innerHTML = person.occupation;
                        cell3.innerHTML = person.dob;
                    }
        }).catch((err) => { console.log(err); });
        
        console.log("Retrieve button clicked");
    }


    return(
        <Container className="my-5 w-75">
            <h1>Page 2</h1>
            <p>This page will display data stored in the DB</p>

            <table className="retrivelDisplayTable w-100">
                <p>Empty Table</p>
            </table>
            

            <button onClick={handleRetrieve}>
                Retrieve
            </button>
        </Container>
    );
}

export default Retrieval;