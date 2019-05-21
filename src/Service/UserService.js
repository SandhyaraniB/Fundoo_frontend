import axios from 'axios'
export const userService =
 {
    login,
    register
};

function login(emailId,password)
{
    const data={
                emailId:this.emailId,
                password:this.password
              }
              alert(data)
              axios
              .post('http://localhost:8080/user/login',emailId,password)
              .then(response => {
                alert(response.data.satusmessage)
              //  alert("successfully  Login");
              // console.log(response.data.token);
               localStorage.setItem('token',response.data.token);
                // this.emailId=response.blog
        })
              .catch(error => {
              alert(error)
              })
          }
 function register(data)
 {
     alert("inside userservice register")
     
    // const data={
    //             emailId:this.emailId,
    //             name:this.name,
    //             mobileNumber:this.mobileNumber,
    //             password:this.password
    //           }
              alert(data)
              axios
              .post('http://localhost:8080/user/register',data)
              .then(response => {
                alert(response.data.message)
                
        })
              .catch(error => {
                // console.log('error')
                
              alert(error)
              })
 }
         