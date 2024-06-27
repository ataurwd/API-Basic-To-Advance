fetch('data.json')
.then(res => res.json())
.then(data => showDataFunc(data))


const showDataFunc = (data) =>{
    let lists = '';
    data.forEach(dataUser => {
        lists = lists + `
        <div class="flexItem">
       
            <div class="divStyle">
            <h1> ${dataUser.id}</h1> 
            <h2> ${dataUser.name}</h2>
            <h3>Address: ${dataUser.address} </h3>
            </div>
        </div>
        `
    });
    const showItem = document.getElementById('listItem');
    showItem.innerHTML = lists;
}
