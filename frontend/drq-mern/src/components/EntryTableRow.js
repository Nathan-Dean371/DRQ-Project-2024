import { Component } from "react";

function handleUpdate(id)
    {
        console.log("Update button clicked for id: " + id);
    }

    function handleDelete(id)
    {
        console.log("Delete button clicked for id: " + id);
    }


export default function EntryTableRow(
    {
        entries
    })
    {
        return(
            <tbody>
                {entries.map(entry => (
                    <tr key={entry._id}>
                        <td>{entry.name}</td>
                        <td>{entry.occupation}</td>
                        <td>{entry.dob}</td>
                        <td>
                            <button onClick={() => handleUpdate(entry._id)}>Update</button>
                            <button onClick={() => handleDelete(entry._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    }