import React,{Component} from 'react';

import {Route, Link} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import data from '../dummy-store';
import NotefullHome from '../notefullHome/notefullHome';
import NoteList from '../noteCardList/noteList';
import FolderList from '../folderList/folderList';
import '../App/App.css';

// console.log(data);



class App extends Component{
  state= {
    notes: [],
    folders: [],
  }
  
  //methods 
  componentDidMount(){console.log(this.props.match.params)}

  render(){

    //STATE
    // state ={};
    
    //CREATE ROUTES

    //updateNav(){}

    //updateMain(){}
    

   
    //MAIN RENDER
    return ( 
          <div>
                <header><Link to={'/'}><NotefullHome name="Noteful Home"/></Link></header> 
                <aside>
                <FolderList className="folder-area" files={data} />
                </aside>
                <section className="grid-container">
                <NoteList className="note-area"files={data}/>
                </section>
             </div>)

   

}
}

export default App;
