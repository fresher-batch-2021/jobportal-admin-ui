function listUsers(){
    console.log("list users");
    const dbUsername='apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
    const dbPassword='532b6c43f03b7016261e7a66b65a2648';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
    const url = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/register/_all_docs?include_docs=true";
        axios.get(url,  {headers:{Authorization:basicAuth}}).then(res=>{
            console.log(res.data);
            const data = res.data.rows.map(obj=>obj.doc);
            console.table(data);
            formRegisterTableData(data);
          
        }).catch(err=>{
            console.error(err);
            console.log("Unable to fetch data");
        })
}

function formRegisterTableData(jobs){
    console.table(jobs)
    console.table(jobs[0].appliedJobs)
    let content = "";
    let i =1;
    for(let jobObj of jobs){
               
        content += `<tr>
        <td>${i++}</td>
        <td>${jobObj.name}</td>
        <td>${jobObj.email}</td>
       `;
    // let details=jobObj.appliedJobs
    // console.table(details)
    for(let Obj of jobObj.appliedJobs){
        content += `
        <td>${Obj.companyName}<br>${Obj.skills}<br>${Obj.status}</td>  
        <td><button type='button' onclick="updateStatus('${jobObj._id}','${Obj.companyName}','Accepted')">Accept
            </button>&nbsp;&nbsp;&nbsp;<button type='button' onclick="updateStatus('${jobObj._id}','${Obj.companyName}','Rejected')">Reject</button></td>
            
         
     `;
               
    }content+=`</tr>`
}
    console.log(content);
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
    
   
    const dbUsername='apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
    const dbPassword='532b6c43f03b7016261e7a66b65a2648';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
    const url = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/register/"+ _id;
    console.log('update'+_id+',status='+status);
    axios.get(url,{headers:{'Authorization':basicAuth}}).then(result=>{
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

