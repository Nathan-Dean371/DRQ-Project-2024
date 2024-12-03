import { Component, useState } from "react";

function handleUpdate(id)
    {
        console.log("Update button clicked for id: " + id);
    }

    function handleDelete(id)
    {
        console.log("Delete button clicked for id: " + id);
    }

function EntryItem({entry, onChange, onDelete})
{
    const [isEditing, setIsEditing] = useState(false);
    let entryContent;

    if(isEditing)
    {
        entryContent = (
            <>
            <input 
                value={entry.name}
                onChange={e =>
                {
                    onChange({
                        ...entry,
                        name: e.target.value
                    });
                }}/>

            <input
                value={entry.occupation}
                onChange={e =>
                {
                    onChange({
                            ...entry,
                            occupation: e.target.value
                    });
                }}/>

            <button onClick={() => setIsEditing(false)}>
                Save
            </button>
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
                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </tr>
                
            </>
        )
    }
    return(
        <>
            {entryContent}
            <button onClick={() => onDelete(entry._id)}>
            Delete
            </button>
        </>
    )
}

export default function EntryTableRow(
    {
        entries,
        onChangeEntry,
        onDeleteEntry
    }) {
        return(
            <table className="w-100">
                <tbody>
                {entries.map(entry => 
                (
                    <EntryItem
                        entry={entry}
                    />
                ))}
                </tbody>
            </table>
        );
    }
    
    