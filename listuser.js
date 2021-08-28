function listUsers(){
    console.log("list users");
    const dbUsername='apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
    const dbPassword='532b6c43f03b7016261e7a66b65a2648';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
    const url = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/register/_all_docs?include_docs=true";
        axios.get(url,  {headers:{Authorization:basicAuth}}).then(res=>{
            const data = res.data.rows.map(obj=>obj.doc);
            console.table(data);
            formRegisterTableData(data);
          
        }).catch(err=>{
            console.error(err.response);
            console.log("Unable to fetch Movies");
        })
}

function formRegisterTableData(jobs){
    
    let content = "";
    let i =1;
    for(let jobObj of jobs){
        
        let imageUrl = "images/" + jobObj.imageUrl;
        content += `<tr><td>${i++}</td><td>
        ${jobObj.name}</td><td>${jobObj.email}</td>
        <td>${jobObj.appliedJobs}</td>
        </tr>`;
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