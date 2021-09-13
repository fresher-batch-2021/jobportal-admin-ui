class JobService{
    static addJobService(jobObj){
        const url = endpoint+"jobs";
        return axios.post(url,jobObj, {headers:{Authorization:basicAuth}})
    }
    static editService(id){
        const url = endpoint+`jobs/${id}`;
         return axios.get(url, {headers:{Authorization:basicAuth}})
    }
    static listJobService(){
        const url = endpoint+"jobs/_all_docs?include_docs=true";
       return axios.get(url,  {headers:{Authorization:basicAuth}})
    }
    static editSkills(modifyDetails){   
        const url = endpoint+`jobs/${modifyDetails._id}?rev=${modifyDetails._rev}`;
        return axios.put(url, modifyDetails, {headers:{'Authorization':basicAuth}});
      }
}