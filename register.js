function register() {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#confirmpassword").value;
   
   if(email==""||email==null||email.trim()==""){
       alert("invalid name");
   }
   
   else 
   if(password != confirmpassword){
       alert("password does not match with confirmpassword");
   }
   else{
    //    let obj={  "companyName": "tcs",
    //    "skills": "java",
    //    "status": "applied"  };
       
       let registerObj={
           "name":name,
           "email":email,
           "password":password,
           "appliedJobs":null
            
       };
       console.log(registerObj);
      
      
 
      UserService.register(registerObj).then(res =>{
 
        let data=res.data;
        console.log(data);
         alert(data)
        alert("Registration is successful");
        window.location.href="login.html";
   }).catch(err=>{
           console.error(err.response);
           alert("Unable to register");
       });
   }
}