import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import {Route, Link} from 'react-router-dom';
import NoteList from './noteCardList/noteList';
import AddFolder from './AddFolder/Add';

// ReactDOM.render( <BrowserRouter> 
//     <Route path="/" component={App}/>
//     <Route path="/folder/:folderID" component={App}/>
//     <Route path="/note/:noteID" component={NoteList}/>
//      </BrowserRouter>, document.getElementById('root') )


ReactDOM.render(<App />, document.getElementById('root'))