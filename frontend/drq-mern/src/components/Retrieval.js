import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import EntryTable from "./EntryTable";
import { useState } from "react";

function Retrieval()
{
    const [entryArray, setEntryArray] = useState([]);

    function handleRetrieve()
    {
        axios.get("http://localhost:4000/retrieve").then((response) => 
            {
                console.log(response);
                setEntryArray(response.data);
        }).catch((err) => { console.log(err); });
        
        console.log("Retrieve button clicked");
    }

    function arrayChanged()
    {
        handleRetrieve();
    }

    return(
        <Container className="my-5 w-75">
            <h1>Document display</h1>
            <p>This page allows you view & edit or update database entries.</p>

            <EntryTable
                entries={entryArray}
                onChange={arrayChanged}
            />

            <button onClick={handleRetrieve}>
                Retrieve
            </button>
        </Container>
    );

}



export default Retrieval;