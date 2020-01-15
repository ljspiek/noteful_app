import React from 'react'
import './theme.css'


const handleSubmit = (event) => {
    event.preventDefault();
    // PROCESS FROM VALUES
    const FolderName = event.target.name.value;
    console.log('Name: ', FolderName);
  }

const addfolder = () =>{
    return (
        <div>
            <h1>Add New Folder</h1>
            <form className="addFolder" onSubmit={e => handleSubmit(e)}>
                <label for="name">Folder Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
                <input type="text" id="name"></input><br></br>
                <br></br> 
                <div className="registration__button__group">
                <button type="reset" className="registration__button">
                    Cancel
                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="submit" className="registration__button">
                            Submit
                        </button>
                    </div>
                                
                            </form>

        </div>
    )
        
} 

export default addfolder;
