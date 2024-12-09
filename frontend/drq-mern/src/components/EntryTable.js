import { Component, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export default function EntryTable(
    {
        entries,
        onChange
    }) {
        return(
            <table className="w-100">
                <tbody>

                {/* Dynamically add an entryItem for each entry in the array */}
                {entries.map(entry => 
                (   
                    
                    <EntryItem
                        entry={entry}
                        onChange={onChange}
                        
                    />
                    
                ))}
                </tbody>
            </table>
        );
    }
    

function EntryItem({entry, onChange})
{
    const [isEditing, setIsEditing] = useState(false);
    const [fullname, setFullname] = useState('');
    const [occupation, setOccupation] = useState('');
    const [dob, setDob] = useState('');
    const [id, setId] = useState('');
    const [entryState, setEntry] = useState({entry});

    let entryContent;

    //This function "turns on" the editing mode and sets the state for the input fields 
    function handleEditClick()
    {
        setIsEditing(true)
        setFullname(entry.name);
        setOccupation(entry.occupation);
        setDob(entry.dob);
    }

    //This function deletes the entry from the database
    function handleDeleteClick()
    {
        console.log("Delete clicked for entry with id: " + entry._id);

        axios.delete("http://localhost:4000/delete", {
            data: {id: entry._id}
        }).then((response) => {
            console.log(response);
            alert("Data deleted successfully");

            
            onChange();

        }).catch((err) => {
            console.log(err);
            alert("Error deleting data");
        });
    }

    function handleSaveClick()
    {
        console.log("Save clicked for entry with id: " + entry._id);
        setIsEditing(false)

        //Check if the user has made any changes
        if(fullname === entry.name && occupation === entry.occupation && dob === entry.dob)
        {
            console.log("No changes made");
            return;
        }

        //Update the entry
        axios.put("http://localhost:4000/update", {
            id: entry._id,
            name: fullname,
            occupation: occupation,
            dob: dob
        }).then((response) => {
            console.log(response);
            alert("Data updated successfully");

            //Calling onChange here will trigger a re-render of the EntryTable component
            onChange();

        }).catch((err) => {
            console.log(err);
            alert("Error updating data");
        });

        //Update the entry in the state
        setEntry({
            ...entryState,
            name: fullname,
            occupation: occupation,
            dob: dob
        });

        
    }

    if(isEditing)
    {
        
        entryContent = (
            <>
            <tr key={entry._id}>
                <td><input type="text" value={fullname} onChange={(event) => setFullname(event.target.value)}/></td>
                <td><input type="text" value={occupation} onChange={(event) => setOccupation(event.target.value)}/></td>
                <td><input type="date" value={dob} onChange={(event) => setDob(event.target.value)}/></td>
                <Button key="saveButton" bsPrefix="btn btn-success mx-2" onClick={() => handleSaveClick()}>
                    Save
                </Button>
                <Button key="cancelButton" bsPrefix="btn btn-danger mx-2" onClick={() => setIsEditing(false)}>
                    Cancel
                </Button>
                
            </tr>
            </>
        );
    } else
    {
        entryContent = (
            <>
                <tr key={entry._id}>
                    <td>{entry.name}</td>
                    <td>{entry.occupation}</td>
                    <td>{entry.dob}</td>
                        <Button bsPrefix="btn btn-primary mx-2" key="editButton" onClick={() => handleEditClick(entry)}>
                            Edit
                        </Button>
                        <Button bsPrefix="btn btn-danger mx-5" key="deleteButton"  onClick={() => handleDeleteClick(entry)}>
                            Delete
                        </Button>
                </tr>
            </>
        )
    }
    return(
        <>
            {entryContent}
        </>
    )
}




