function listUsers(){
    console.log("list users");
    UserService.listUsersService().then(res=>{
            console.log(res.data);
            const data = res.data.rows.map(obj=>obj.doc);
            console.table(data);
            formRegisterTableData(data);
          
        }).catch(err=>{
            console.error(err);
            console.log("Unable to fetch data");
        })
}

function listAppliedUsers(jobId){
    console.log("list Applied USers", jobId);
    UserService.appliedUserService().then(res=>{
            const data = res.data.rows.map(obj=>obj.doc);
            let appliedUsers = [];
            for(let user of data){
                if(user.appliedJobs){
                let job = user.appliedJobs.find(obj=> obj.companyName == jobId);
                if(job){
                    user.appliedJobs = [job]; //instead of all jobs , assign selected  job 
                    appliedUsers.push(user);
                }
             }
        }
        formRegisterTableData(appliedUsers);
          
        }).catch(err=>{
            console.error(err);
            console.log("Unable to fetch data");
        })
}
function formRegisterTableData(jobs){
    console.table(jobs)
    
    let content = "";
    let i =1;
    for(let jobObj of jobs){
               
        let appliedJobs = jobObj.appliedJobs;
        let companyName ;
        if(appliedJobs != null && appliedJobs.length > 0){
            companyName = appliedJobs[0].companyName;
        
        content += `<tr>
        <td>${i++}</td>
        <td>${jobObj.name}</td>
        <td>${jobObj.email}</td> 
        <td><button type='button' onclick="updateStatus('${jobObj._id}','${companyName}','Accepted')">Accept
        </button>&nbsp;&nbsp;&nbsp;<button type='button' onclick="updateStatus('${jobObj._id}','${companyName}','Rejected')">Reject</button></td>
        
       `;
       for(let Obj of jobObj.appliedJobs){
        content += `
        <td>${Obj.companyName}<br>
        <td>${Obj.status}<br></td>
        <td>${Obj.appliedDate}</td>       
    `;
       }
}
content+=`</tr>`

}
    document.querySelector("#list-user").innerHTML = content;
}

listUsers();
function searchName() {
    let searchName = document.getElementById("searchBox").value;
    let myTable = document.getElementById("myTable");
    let tableRow = myTable.getElementsByTagName("tr");
    for (var i = 0; i < tableRow.length; i++) {
        let tableDatas = tableRow[i].getElementsByTagName("td")[1];
        if (tableDatas) {
            let textValue = tableDatas.textContent.toLowerCase() || tableDatas.innerText.toLowerCase();
            if (textValue.indexOf(searchName) > -1) {
                tableRow[i].style.display = "";
            } else {
                tableRow[i].style.display = "none";
            }
        }
    }
}
function updateStatus(_id,companyName, status){
    UserService.updateService(_id,companyName, status).then(result=>{
const applicationJobs = result.data;
let index = applicationJobs.appliedJobs.findIndex(obj=> obj.companyName == companyName);
console.log(index);
if(index != -1){
    applicationJobs.appliedJobs[index].status=status;
}


const updateURL = url + "?rev=" + applicationJobs._rev;
console.log(updateURL);
axios.put(updateURL, applicationJobs, { headers: { 'Authorization': basicAuth } }).then(result => {
    console.log("Update row", result.data);
    alert("Updated");
    window.location.reload();

});

}).catch(err => {
let errorMessage = err.response.data;
console.error(errorMessage);
console.log("failed");
alert("Error-" + errorMessage);
});
}

let params = new URLSearchParams(window.location.search.substr(1))
let jobId = params.get("id");
console.log("selected job Id", jobId)
if(jobId != null){
    listAppliedUsers(jobId);
}