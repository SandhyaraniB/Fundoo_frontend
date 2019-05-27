import axios from 'axios'
export const NoteService =
 {
    CreateNote,
    DeleteNote,
    UpdateNote,
    GetAllNotes
};
//const url:'http://localhost:8080/note';

 function CreateNote(data,token)
 {
    //  var token=localStorage.getItem('token');
    // var tokenone=localStorage.getItem('token');
     alert("AAAAA"+data.title);
    //  alert("Insied Servise......",tokenone)
     axios.post('http://localhost:8080/note/createnote',data,{ headers: {token:token.token} })
     .this(response=>{alert(response.data.message)})
     .catch(error=>{alert(error)})
 }
 function DeleteNote(data,token)
 {
    //  var token=localStorage.getItem('token');
    // var tokenone=localStorage.getItem('token');
     alert("AAAAA"+data.title);
    //  alert("Insied Servise......",tokenone)
     axios.post('http://localhost:8080/note/createnote',data,{ headers: {token:token.token} })
     .this(response=>{alert(response.data.message)})
     .catch(error=>{alert(error)})
 }

 function UpdateNote(data,token)
 {
     axios.post('http://localhost:8080/note/createnote',data,{ headers: {token:token.token} })
     .this(response=>{alert(response.data.message)})
     .catch(error=>{alert(error)})
 }

 function GetAllNotes(token)
 {
     axios.get('http://localhost:8080/note/getAllNotes',{ headers: {token:token.token} })
     .this(response=>{alert(response)})
     .catch(error=>{alert(error)})
        
 }