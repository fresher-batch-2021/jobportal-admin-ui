function login() {
  
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (email == "" || email == null || email.trim() == "") {
    alert("invalid email");
  } else {
    if (password.trim() != "") {
      
      UserService.login(email, password)
        .then(res => {
          let data = res.data.docs;
          console.log(data);
      if(data.length==0){
        alert('please register')
        window.location.href='register.html'
      }
          else{
            const user = data[0];
          localStorage.setItem("IsLoggedIn",JSON.stringify(user));

           localStorage.setItem("userEmail", JSON.stringify(email) );
          console.log(res.data)
           //savin email in local storage
           
          localStorage.setItem("userObj",JSON.stringify(res.data.docs[0]))
          console.log(JSON.stringify(res.data.docs))
           alert("Login successful");
          
           window.location.href = "index.html";
        }
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data.errormessage) {
            alert(err.response.data.errormessage);
          } else {
            alert("Login failed");
          }
        });
    } else {
      alert("Password  cannot be blanked");
    }
  }
}
