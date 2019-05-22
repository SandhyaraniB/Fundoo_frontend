import axios from 'axios'
export const userService =
 {
    login,
    register
};

function login(data)
{
     alert(data);
     axios.post('http://localhost:8080/user/login',data)
          .then(response => { alert(response.data.satusmessage)
           localStorage.setItem('token',response.data.token);
        }).catch(error => { alert(error)})
}
 function register(data)
 {
     alert("inside userservice register");
     alert(data);
     axios.post('http://localhost:8080/user/register',data)
          .then(response => {alert(response.data.message)})
          .catch(error => { alert(error)})
 }
         