import { Component, useState } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";



export default function EntryTable(
    {
        entries,
        onChange
    }) {
        return(
            <table className="w-100">
                <tbody>
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

    function handleEditClick()
    {
        setIsEditing(true)
        setFullname(entry.name);
        setOccupation(entry.occupation);
        setDob(entry.dob);
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
                <td><p>Editing {fullname}</p></td>
                <td><input type="text" value={fullname} onChange={(event) => setFullname(event.target.value)}/></td>
                <td><input type="text" value={occupation} onChange={(event) => setOccupation(event.target.value)}/></td>
                <td><input type="date" value={dob} onChange={(event) => setDob(event.target.value)}/></td>

                <button key="cancelButton" onClick={() => setIsEditing(false)}>
                    Cancel
                </button>
                <button key="saveButton" onClick={() => handleSaveClick()}>
                    Save
                </button>
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
                    <button key="editButton" onClick={() => handleEditClick(entry)}>
                        Edit
                    </button>
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




