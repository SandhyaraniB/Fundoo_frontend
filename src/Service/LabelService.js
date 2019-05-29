import axios from 'axios'
export const NoteService =
 {
    CreateLabel,
   
};
//const url:'http://localhost:8080/note';

 function CreateLabel(data,token)
 {
    //  var token=localStorage.getItem('token');
    // var tokenone=localStorage.getItem('token');
    //  alert("AAAAA"+data.name);
    //  alert("Insied Servise......",tokenone)
     axios.post('http://localhost:8080/Label/createlabel',data,{ headers: {token:token.token} })
     .this(response=>{alert(response.data.message)})
     .catch(error=>{alert(error)})
 }
