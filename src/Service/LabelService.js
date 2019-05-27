import axios from 'axios'
export const NoteService =
 {
    CreateLabel,
   
};
//const url:'http://localhost:8080/note';

 function CreateLabel(data,noteid,token)
 {
    //  var token=localStorage.getItem('token');
    // var tokenone=localStorage.getItem('token');
    //  alert("AAAAA"+data.name);
    //  alert("Insied Servise......",tokenone)
     axios.post('http://localhost:8080/note/createnote',data,noteid,{ headers: {token:token.token} })
     .this(response=>{alert(response.data.message)})
     .catch(error=>{alert(error)})
 }
