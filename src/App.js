import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/createStore";
import './App.css';
import InputSelection from "./Components/input"
import NoteSection from './Components/notesection';

function App() {
  return (
    <Provider store={store}>
       <div className="container">
         <h1>ToDo</h1>
         <InputSelection/>
         <br/>
         <NoteSection/>
       </div>
    </Provider>
  );
}

export default App;
