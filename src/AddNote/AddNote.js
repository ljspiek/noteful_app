import React from 'react'
import './theme.css'


const handleSubmit = (event) => {
    event.preventDefault();
    // PROCESS FROM VALUES
    const FolderName = event.target.name.value;
    console.log('Name: ', FolderName);
  }

const addnote = () =>{
    return (
        <div>
            <h1>Add New Note</h1>
            <form className="addnote" onSubmit={e => handleSubmit(e)}>
                <label for="name">Add Note</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
                <textarea type="text" id="name" rows="10" cols="60"></textarea><br></br>
                <br></br>
                <label for="fname">Folder Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
                <input type="text" id="fname"></input><br></br>
                <br></br> 
                

                <div className="registration__button__group">
                <button type="reset" className="registration__button">
                    Cancel
                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="submit" className="registration__button">
                            Save
                        </button>
                    </div>
                                
                            </form>

        </div>
    )
        
} 

export default addnote;
