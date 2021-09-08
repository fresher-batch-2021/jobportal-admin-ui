function listJobs(){
    console.log("list jobs");
    JobService.listJobService().then(res=>{
            const data = res.data.rows.map(obj=>obj.doc);
            console.table(data);
            formJobTableData(data);
          
        }).catch(err=>{
            console.error(err.response);
            console.log("Unable to fetch data");
        })
}

function formJobTableData(jobs){
    
    let content = "";
    let i =1;
    for(let jobObj of jobs){
        let imageUrl = "images/" + jobObj.imageUrl;
        content += `<tr><td>${i++}</td><td>
        <img src="${imageUrl}" alt="${imageUrl}" width="200px" height="100px" />${jobObj.companyName}</td>
        <td>${jobObj.skills}</td>
        <td><a href='edit.html?id=${jobObj._id}'>Edit</a></td>        
        <td><button onClick="deleteJob('${jobObj._id}','${jobObj._rev}')">Delete</button></td>
        </tr>`;
    }
    console.log(content);
    document.querySelector("#list-job").innerHTML = content;
}
listJobs();
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