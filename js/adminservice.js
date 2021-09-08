const dbUserName = "apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9";
const dbPassword = "532b6c43f03b7016261e7a66b65a2648";
const endpoint="https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/";
const basicAuth = "Basic " + btoa(dbUserName + ":" + dbPassword);
class JobService{
    static addJobService(jobObj){
        const url = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobs";
        return axios.post(url,jobObj, {headers:{Authorization:basicAuth}})
    }
    static editService(id){
        const url = `https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobs/${id}`;
         return axios.get(url, id, {headers:{Authorization:basicAuth}})
    }
    static listJobService(){
        const url = "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobs/_all_docs?include_docs=true";
       return axios.get(url,  {headers:{Authorization:basicAuth}})
    }
}