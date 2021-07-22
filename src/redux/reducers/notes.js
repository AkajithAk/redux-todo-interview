import actionTypes from "../actionTypes"

const initialState={
    notes:[]
}
export default(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_NOTE:{
            const notes=[...state.notes];
            notes.push(action.note)
            return{
                notes,
            }
        }
        case actionTypes.UPDATE_NOTE:{
            const {index,note}=action;
            const notes=[...state.notes];
            notes[index]=note;
            return{
                notes,
            }
        }
        case actionTypes.DELETE_NOTE:{
            const {index}=action;
            const notes=[];
            state.notes.forEach((note,i)=>{
                if(index !==i){
                    notes.push(note)
                }
            })
            return{
                notes, 
            }
        }
        default:return state;
    }
}


// const newNote=action.note;
//             if(notes.length > 0){
//                 const latestNote=notes[notes.length-1]
                
//                 newNote.id=latestNote.id+1;
                
//             }else{
//                 newNote.id+1
//             }
//             notes.push(newNote);