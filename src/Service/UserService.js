import axios from 'axios'
export const userService =
 {
    login,
    register
};

alert(URL);
function login(data)
{
     // alert(data);
     axios.post('http://localhost:8080/user/login',data)
          .then(response => { 
               // alert(response.data.satusmessage)
           localStorage.removeItem('token');
           localStorage.setItem('token',response.data.token);
           window.location.href="http://localhost:8081/navbar"
        }).catch(error => { 
             error
          //    alert(error)
          })
}
 function register(data)
 {
     // alert("inside userservice register");
     // alert(data);
     axios.post('http://localhost:8080/user/register',data)
          .then(response => {
               response.data
               // alert(response.data.message)},
          window.location.href="http://localhost:8081/user/Login"})
          .catch(error => { 
               // alert(error)
               error.data
          })
 }
         