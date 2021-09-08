function addJobForm(){
    const companyName = document.querySelector("#companyName").value;
    const skills= document.querySelector("#skills").value;
    const imageUrlFilePath= document.querySelector("#imageUrl").value;
    const imageUrl = imageUrlFilePath.substring(imageUrlFilePath.lastIndexOf("\\")+1);
     addJob(companyName,skills,imageUrl);
}
function addJob(companyName,skills,imageUrl)
{
    console.log("Add job" , companyName, skills, imageUrl);
    try{
        Validator.isValidString(companyName, "job Title is Mandatory");
        Validator.isValidString(skills, "skill Language is Mandatory");
        Validator.isValidString(imageUrl, "job Image is Mandatory");
        console.log("Job Details are valid");
        alert("succesfully Added");
        const jobObj = { companyName:companyName, skills:skills, imageUrl:imageUrl};
        console.log(jobObj);
        JobService.addJobService(jobObj).then(res=>
            {
            const data = res.data;
            console.log("Response:", data);
            console.log("Successfully Added");
        }).catch(err=>{
            console.error(err.response);
            console.log("Unable to add Job");
        })
    }
    catch(err){
        console.error(err.message);
        alert("Error" + err.message);
    }
    
}