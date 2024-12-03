import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import EntryTableRow from "./EntryTableRow";
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

    return(
        <Container className="my-5 w-75">
            <h1>Page 2</h1>
            <p>This page will display data stored in the DB</p>

            
            <EntryTableRow
            entries={entryArray}
            onChangeEntries={handdleChangeEntries}
            />
            <button onClick={handleRetrieve}>
                Retrieve
            </button>
        </Container>
    );

    function handdleChangeEntries(nextEntry)
{
    setEntryArray(entryArray.map(e => {
        if(this.id === nextEntry.id)
        {
            return nextEntry;
        } else {
            return e;
        }
    }));
}
}



export default Retrieval;