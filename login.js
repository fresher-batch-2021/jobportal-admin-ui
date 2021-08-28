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
            localStorage.setItem("IsLoggedIn",JSON.stringify(true));
           localStorage.setItem("userEmail", email);
            console.log(res.data)
             //savin email in local storage
             alert(res.data)
            localStorage.setItem("userObj",JSON.stringify(res.data.docs[0]))
            console.log(JSON.stringify(res.data.docs))
             alert("Login successful");
            
            window.location.href = "index.html";
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
  