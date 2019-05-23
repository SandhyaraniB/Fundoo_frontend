import axios from 'axios'
export const NoteService =
 {
    CreateNote,
};
//const url:'http://localhost:8080/note';

 function CreateNote(data)
 {
     alert(data);
     axios.post('http://localhost:8080/note/createnote',data)
     .this(response=>{alert(response.data.message)})
     .catch(error=>{alert(error)})
 }
         