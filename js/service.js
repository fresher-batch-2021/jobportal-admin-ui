class UserService {
  static login(email, password) {
    const url =endpoint+"register/_find"; //registration url

    const requestData = {
      selector: {
        email: email,
        password: password,
      },
      fields: ["_id", "_rev", "name", "email","role","appliedJobs"]
    };
    console.log(requestData); //for our verification

    return axios.post(url, requestData, {
      headers: { Authorization: basicAuth },
    });
  }
  
static updateData(id,rev,obj){

  const url=`https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/register/${id}?rev=${rev}`;
    return axios.put(url,obj,{headers:{Authorization:basicAuth}});
}

  static findData(id){
    const url=`https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobs/${id}`;
    return axios.get(url,{headers:{Authorization:basicAuth}});
  }
static getAllData(db){
    const url=endpoint+db+"/_all_docs?include_docs=true";
  return axios.get(url,{headers:{Authorization:basicAuth}});
   }

static getRegisterData(id){

    const url=endpoint+"register/"+id;
    return axios.get(url,{headers:{Authorization:basicAuth}});
     }
   static getJobs(){
    let allData= this.getAllData("jobs");
   return allData;
   }
   static compare(listObj) {
    const compareData = {
      selector: {
        compaName : companyName,
      },
      fields: [ "name", "email"]
    };
    console.log(compareData);
    const url =
      "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/register/_find"; //registration url

    //for our verification

    return axios.get(url, compareData, {
      headers: { Authorization: basicAuth },
    });
  }
 static listUsersService(){
  const url = endpoint+"register/_all_docs?include_docs=true";
 return axios.get(url,  {headers:{Authorization:basicAuth}})
 }
 static appliedUserService(){
  const url = endpoint+"register/_all_docs?include_docs=true";
 return  axios.get(url,  {headers:{Authorization:basicAuth}})
 }
 static updateService(_id,companyName, status){
  const url = endpoint+"register/"+ _id;
  console.log('update'+_id+',status='+status);
 return  axios.get(url,_id,companyName, status,{headers:{'Authorization':basicAuth}})
 }
}