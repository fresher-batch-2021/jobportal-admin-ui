const result = document.getElementById('result')
const filter = document.getElementById('filter').value;
const listItems = []
getData();
window.addEventListener('input', (e) =>filterData(e.target.value))
function getData() {
    let x=UserService.getJobs();
    x.then(res=>{
      let value=res.data.rows.map(obj=>obj.doc);
        console.table(value);
      let results=value;
        console.table(results);
      results.forEach(user => {
        const li = document.createElement('li');
        listItems.push(li)
        li.innerHTML = `
            <img src="images/${user.imageUrl}" alt="${user.companyName}">
            <div class="user-info">
                <h4>${user.companyName}</h4>
                <h5>Required :${user.skills}</h5>
                <h5><button><a href ="viewuser.html?id=${user.companyName}">View</a></button></h5>
            </div>
        `;

        result.appendChild(li)
    })}).catch(err =>{
        console.error(err);
      console.log(err.response);
    });    
}
function filterData(searchTerm) {
    console.log(searchTerm);
    console.table(listItems);
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}