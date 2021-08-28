const dbUserName = "apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9";
const dbPassword = "532b6c43f03b7016261e7a66b65a2648";
const endpoint="https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/";
// one space after Basic
const basicAuth = "Basic " + btoa(dbUserName + ":" + dbPassword);
class UserService {
  static login(email, password) {
    const url =
      "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal/_find"; //registration url

    const requestData = {
      selector: {
        email: email,
        password: password,
      },
      fields: ["_id", "_rev", "name", "email","appliedJobs"]
    };
    console.log(requestData); //for our verification

    return axios.post(url, requestData, {
      headers: { Authorization: basicAuth },
    });
  }
  


  static register(registerObj) {

    const url =
      "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal";
    console.log(basicAuth);
    return axios.post(url, registerObj, {
      headers: { Authorization: basicAuth }
    });
  }
  static getUsers(){
        
    const url="https://b4af4ef2-55e1-4a9b-9b02-8168e5964652-bluemix.cloudantnosqldb.appdomain.cloud/register/_all_docs?include_docs=true";


    return axios.get(url, { headers: { Authorization: basicAuth } });
}
  }
