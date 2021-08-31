const routes = [
    { path: "login.html",roles:["ADMIN"]},
    { path: "index.html", roles:["ADMIN"] },
    { path: "addjob.html", roles:["ADMIN"] },
    { path: "edit.html", roles: ["ADMIN"] },
    { path: "listjob.html",roles:["ADMIN"] },
    {path:  "service.html",roles:["ADMIN"]},
    {path:"view.html",roles:["ADMIN"]},
    {path:"viewuser.html",roles:["ADMIN"]},

];

 function logout() {
     alert('im logging out')
     localStorage.clear();
     window.location.href = "login.html";
 }
function checkAccess(pageName, role) {
    let allowed = false;
    for (let route of routes) 
    {
        if (route.path == pageName)
         {
            if (!route.roles) 
            {
                allowed = true;
                break;
            }
            else if (route.roles.includes(role))
             {
                allowed = true;
                break;
            }
        }
    }
    return allowed;
}
(function () {
    console.log("Routes initializing")
    let user = JSON.parse(localStorage.getItem("IsLoggedIn"));
    console.log("LoggedIn User", user);
    let role = user != null ? user.role : null;
    let pathName = window.location.pathname.substr(1);
    console.log(role,pathName)
    let allowedAccess = checkAccess(pathName, role);



    if (!allowedAccess) {
        alert("You are not authorized to access this page,Redirecting to login page");
        window.location.href = "login.html";
    }
})
();