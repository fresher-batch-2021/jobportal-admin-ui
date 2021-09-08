const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

function editDetails(id) {
    console.log(id);
    JobService.editService(id).then(res=>{
            console.log(res.data);
        const jobDetail = res.data;
        console.log(jobDetail)
        document.querySelector("#id").value = jobDetail._id;
        document.querySelector("#rev").value = jobDetail._rev;
        document.querySelector("#companyName").value = jobDetail.companyName; 
        document.querySelector("#skills").value = jobDetail.skills;
    })
    .catch(err => console.error(err));
}
editDetails(id);

function modifyDetails(){

    let id = document.querySelector("#id").value;
    let rev = document.querySelector("#rev").value;
    let companyName = document.querySelector("#companyName").value;
    let imageUrlFullPath = document.querySelector("#imageUrl").value;
    const imageUrl =imageUrlFullPath.substring(imageUrlFullPath.lastIndexOf("\\")+1);
    let skills = document.querySelector("#skills").value;
    let modifyDetails = {
        "_id": id,
        "_rev": rev,
        "companyName": companyName,
        "imageUrl": imageUrl,
        "skills":skills
        }
    console.log(modifyDetails);
    
    const dbUsername='apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
    const dbPassword='532b6c43f03b7016261e7a66b65a2648';
    const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
    const url = `https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobs/${id}`;
    axios.put(url, modifyDetails, {headers:{Authorization:basicAuth}}).then(res=>{
            console.log(modifyDetails)
        alert("successfull");
        window.location.href="listjob.html";
    }).catch(err => alert("error "))

}

editDetails(id);