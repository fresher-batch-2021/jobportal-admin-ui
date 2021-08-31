function deleteJob(jobId,revId) {
    console.log("delete movie", jobId, revId);
    if (jobId == null) {
      alert("JobId is mandatory");
    } else {
      const dbUsername='apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9';
      const dbPassword='532b6c43f03b7016261e7a66b65a2648';
      const basicAuth= 'Basic ' + btoa(dbUsername+':'+dbPassword);
      const url =
        "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobs/"+jobId+"?rev="+revId;
        console.log(url);
      axios.delete(url,{headers:{Authorization:basicAuth}}).then(res => {
          // const data = res.data;
          // console.log(data);
          alert("hi");
          console.log("Successfully Deleted");
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log("Unable to delete Jobs" + jobId);
        });
    }
  }
  //deleteMovie();