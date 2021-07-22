import React from "react";
import { useDispatch, useSelector } from "react-redux";
import inputActions from "../redux/action/inputActions";
import noteActions from "../redux/action/noteActions";
import "./input.css";
 

const InputSelection = () => {
  const id=useSelector(state=>state.inputs.id);
  const title=useSelector(state=>state.inputs.title);
  const content=useSelector(state=>state.inputs.content);
  const time=useSelector(state=>state.inputs.time);
  const dispatch=useDispatch();


  const addNote=()=>{
    if(title&&content&&time){
      dispatch(noteActions.addNote({
        title,
        content,time
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateNote = () => {
    if(title && content) {
      dispatch(noteActions.updateNote(id, {
        title, content,time
      }))
      dispatch(inputActions.resetInputs())
    }    
  }
  // const updateNote=()=>{
  //   if(title&&content){
  //     dispatch(noteActions.updateNote({
  //       title,
  //       content
  //     }))
  //     dispatch(inputActions.resetInputs())
  //   }
  // }
 
   const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }
  return (
    <div>
  <div className="inputs">
  

    <input type="text"  placeholder="title" value={title} onChange={e=>dispatch(inputActions.setInputTitle(e.target.value))} className="titles"/>
    </div>
    
    {/* <input type="text"  placeholder="date" value={content} onChange={e=>dispatch(inputActions.setInputContent(e.target.value))} className="dates"/> */}
    {/* <input type="text"  placeholder="time" value={time} onChange={e=>dispatch(inputActions.setInputTime(e.target.value))} className="times"/> */}
    {/* <input class="datepicker" data-date-format="mm/dd/yyyy"  /> */}
 
    <div class="md-form md-outline input-with-post-icon datepicker dateandtimeandbtn">
  <input placeholder="Select date" type="date" id="example" class="form-control" value={content} onChange={e=>dispatch(inputActions.setInputContent(e.target.value))} className="dates"/>
   
</div> 

    <div class="md-form mx-5 my-5 dateandtimeandbtn"> 
  <input type="time" id="inputMDEx1" class="form-control" value={time} onChange={e=>dispatch(inputActions.setInputTime(e.target.value))} className="times"/>
  
</div>
   <div className="inputs dateandtimeandbtn">
   <button onClick={id===-1? addNote:updateNote} className="buttons">{id===-1 ?"Add":"Update"}</button>
   <br/>
    {
      id !==-1&&
      <button onClick={deleteNote} className="deleteBtn">Delete</button>
    }
    </div>
 
  </div>);

};

export default InputSelection;
