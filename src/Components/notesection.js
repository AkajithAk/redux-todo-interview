import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import inputActions from '../redux/action/inputActions';
import NoteItem from './noteitem';

import './notesection.css';

const NoteSection=()=>{
    const dispatch=useDispatch();
    const notes=useSelector(state=>state.notes.notes)

    if(notes.length===0){
         return(
             <hi1>Empty</hi1>
         )
    }

    const onItemClicked=(item,index)=>{
       dispatch(inputActions.setInputId(index))
       dispatch(inputActions.setInputTitle(item.title))
       dispatch(inputActions.setInputContent(item.content))
       dispatch(inputActions.setInputTime(item.time))
    }
    return(
        <div >
          {
              notes.map((item,index)=>
              {
                  if(item){
                    return (
                        <NoteItem title={item.title} 
                content={item.content}
                time={item.time}
                onItemClicked={()=>{onItemClicked(item,index)}}
                />
                    )
                  }
                  return null;
              })
          } 

        </div>
    )
}

export default NoteSection;