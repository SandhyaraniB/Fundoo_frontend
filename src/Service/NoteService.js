import axios from 'axios'
export const NoteService =
 {
    CreateNote,
    DeleteNote,
    UpdateNote,
    GetAllNotes,
    ArchiveNote,
    TrashNote,
    PinNote,
    Reminder,
    AddImageToNote,
    AddingCollaborator,
    DeleteCollaborator,
    GetAllCollaborator,
    SearchNoteByTitle

};
//const url:'http://localhost:8080/note';

 function CreateNote(data,token)
 {
    //  var token=localStorage.getItem('token');
    // var tokenone=localStorage.getItem('token');
    //  alert("Insied Servise......",tokenone)
     axios.post('http://localhost:8080/note/createnote',data,{ headers: {token:token} })
     .this(response=>{response.data.message})
     .catch(error=>{
         error})
 }
 function DeleteNote(noteid,token)
 {
    //  var token=localStorage.getItem('token');
    // var tokenone=localStorage.getItem('token');
    //  alert("AAAAA"+data.title);
    //  alert("Insied Servise......",tokenone)
     axios.delete('http://localhost:8080/note/deletenote',noteid,{ headers: {token:token.token} })
     .this(response=>{response.data.message})
     .catch(error=>{error})
 }

 function UpdateNote(data,token)
 {
     axios.post('http://localhost:8080/note/updatenote',data,{ headers: {token:token.token} })
     .this(response=>{response.data.message})
     .catch(error=>{error})
 }

 function GetAllNotes(token)
 {
     axios.get('http://localhost:8080/note/getAllNotes',{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
       
 }
 function ArchiveNote(noteid,token)
 {
     axios.put('http://localhost:8080/note/archivenote',noteid,{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
       
 }
 function TrashNote(noteid,token)
 {
     axios.put('http://localhost:8080/note/trashnote',noteid,{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
       
 }
 function PinNote(noteid,token)
 {
     axios.put('http://localhost:8080/note/pinnote',noteid,{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
       
 }
 function Reminder(noteid,token)
 {
     axios.put('http://localhost:8080/note/reminder/'+noteid,{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
       
 }
 function AddImageToNote(noteid,token)
 {
     axios.put('http://localhost:8080/note/addImageToNote',noteid,{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
       
 }
 function AddingCollaborator(noteid,emailId,token)
 {
     axios.post('http://localhost:8080/note/addingCollaborator',noteid,emailId,{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
       
 }
 function DeleteCollaborator(noteid,emailId,token)
 {
     axios.delete('http://localhost:8080/note/deleteCollaborator',noteid,emailId,{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
       
 }
 function GetAllCollaborator(noteid,token)
 {
     axios.post('http://localhost:8080/note/getAllCollaborator',noteid,{ headers: {token:token.token} })
     .this(response=>{response
    })
     .catch(error=>{error})
       
 }
 function SearchNoteByTitle(token,title)
 {
     axios.post('http://localhost:8080/note/searchNoteByTitle',{ headers: {token:token.token} },title)
     .this(response=>{response
    })
     .catch(error=>{error})
       
 }