function addJobForm(){
    event.preventDefault();
    
    const companyname = document.querySelector("#companyname").value;
    const skills= document.querySelector("#skills").value;
    const imageUrlFilePath= document.querySelector("#imageUrl").value;
    const imageUrl = imageUrlFilePath.substring(imageUrlFilePath.lastIndexOf("\\")+1);
     addJob(companyname,skills,imageUrl);
}

function addJob(companyname,skills,imageUrl)
{
    console.log("Add job" , companyname, skills, imageUrl);
    
    try{
        
        Validator.isValidString(companyname, "job Title is Mandatory");
        Validator.isValidString(skills, "skill Language is Mandatory");
        Validator.isValidString(imageUrl, "job Image is Mandatory");
        console.log("Job Details are valid");
        alert("Successfully Added");
        const jobObj = { companyname:companyname, skills:skills, imageUrl:imageUrl};
        console.log(jobObj);
        const dbUsername='apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
        const dbPassword='532b6c43f03b7016261e7a66b65a2648';
        const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
        const url = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobs";
        axios.post(url,jobObj, {headers:{Authorization:basicAuth}}).then(res=>
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