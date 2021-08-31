const result = document.getElementById('result')
const filter = document.getElementById('filter').value;

const listItems = []
getData();

window.addEventListener('input', (e) =>filterData(e.target.value))

 function getData(skillName) {
    //const res = await fetch('jsondata.json')

    //const { results } = await res.json()
    // ServiceUIFrameContext.location().then(r)

    // // Clear result
    // UserService.filter("jobs","javascript")
    // result.innerHTML = ''
    let x=UserService.getJobs();
    x.then(res=>{
        let value=res.data.rows.map(obj=>obj.doc);
        console.table(value);
      let results=value.filter(obj=>obj.companyName==skillName||obj.skills==skillName);
        console.table(results);

      results.forEach(user => {
        const li = document.createElement('li');
        
        listItems.push(li)
        console.log("yesh",user.imageUrl);
        li.innerHTML = `
            <img src="images/${user.imageUrl}" alt="${user.companyname}">
            <div class="user-info">
                <h4>${user.companyname}</h4>
                <h5>Required :${user.skills}</h5>
                
                <h5><button><a href ="viewuser.html?id=${user.companyname}">View</a></button></h5>
                
            </div>
        `;

        result.appendChild(li)
    })}).catch(err =>{
        console.error(err);
      console.log(err.response);
    });

    
}


function filterData(searchTerm) {
    // alert(searchTerm)
    console.log(searchTerm);
    console.table(listItems);
    // alert(listItems)
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
