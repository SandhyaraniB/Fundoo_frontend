import { postServiceToken,getServiceToken }  from '/home/admin1/Desktop/fundoo/src/Service/Service.js'

export function createNote(data,token) {
     return postServiceToken(`note/createnote`, data ,token)
    // .then(response => {
    // console.log(response.data)
    // console.log(response.data.statusMessage)
    // })
    // .catch(err => alert(err.message));
}

export function getNote(token) {
    return getServiceToken(`note/getAllNotes`,token)
   // .then(response => {
   // console.log(response.data)
   // console.log(response.data.statusMessage)
   // })
   // .catch(err => alert(err.message));
}