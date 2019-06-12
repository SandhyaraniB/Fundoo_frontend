import { postServiceToken,getServiceToken,postServiceTokenfor,deleteServiceToken,deleteServiceforlabel,putServiceToken}  from '/home/admin1/Desktop/fundoo/src/Service/Service.js'

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
   
}

export function addcolortonote(noteid,color,token) {
//    console.log('====================================');
//    console.log("in note servicre");
//    console.log('====================================');
    return postServiceTokenfor(`note/addcolor/` + noteid + "?color=" + color,token)
   
}


export function addreminder(noteid,datevalue,token) {
    //    console.log('====================================');
    //    console.log("in note servicre");
    //    console.log('====================================');
        return postServiceTokenfor(`note/reminder/` + noteid + "?date=" + datevalue,token)
       
    }

    export function deletereminder(noteid,token) {
     
            return deleteServiceToken(`note/deletereminder/` + noteid ,token)
           
        }
        

        export function deletelabel(labelid)
         {
        return deleteServiceforlabel(`Label/deletelabel/` + labelid)
        }
        // 

        export function trsahnote(noteid,token)
         {
             return putServiceToken(`note/trashnote/` + noteid,token)
        }