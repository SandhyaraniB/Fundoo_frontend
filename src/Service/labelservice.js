import { postServiceToken,postServiceTokenfor,getServiceTokenforlabel,deleteServiceforlabel}  from '/home/admin1/Desktop/fundoo/src/Service/Service.js'

export function createLabel(data,token) {
     return postServiceToken(`Label/createlabel`, data ,token)
    // .then(response => {
    // console.log(response.data)
    // console.log(response.data.statusMessage)
    // })
    // .catch(err => alert(err.message));
}

export function gettinglabels() {
    return getServiceTokenforlabel(`Label/getAllLabels`)
   
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

    

    export function deletelabelfromnote(labelid,noteid) {
   
            return deleteServiceforlabel(`Label/deltelabelfromnote/` + labelid + "?noteId=" + noteid)
           
        }