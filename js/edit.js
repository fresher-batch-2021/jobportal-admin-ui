$("#editSkills").submit(modifyDetails);
function editDetails() {
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);
    console.log(id);
    JobService.editService(id).then(res=>{
            console.log(res.data);
        const jobDetail = res.data;
        console.log(jobDetail)
        $("#id").val( jobDetail._id);
        $("#rev").val(jobDetail._rev);
        $("#companyName").val(jobDetail.companyName);  
        $("#skills").val(jobDetail.skills);
    })
    .catch(err => console.error(err));
}

function modifyDetails(){

    const id = $("#id").val();
    const rev = $("#rev").val();
    const companyName = $("#companyName").val();
    const imageUrlFullPath = document.querySelector("#imageUrl").value;
    const imageUrl =imageUrlFullPath.substring(imageUrlFullPath.lastIndexOf("\\")+1);
    const skills = $("#skills").val();
    let modifyDetails = {
        _id: id,
        _rev: rev,
        companyName: companyName,
        imageUrl: imageUrl,
        skills:skills
        }
    console.log(modifyDetails);
    
    
    JobService.editSkills(modifyDetails).then(res=>{
            console.log(modifyDetails)
            toastr.success("Company Details are Updated Successfully");
            setTimeout(function () {
                window.location.href='listjob.html'
                }, 1500);
            
    }).catch(err => alert("error "))

}

editDetails();