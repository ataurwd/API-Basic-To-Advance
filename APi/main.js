fetch('data.json')
.then(res => res.json())
.then(data => {
    const showUsers = document.getElementById('users')
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const show = document.createElement('h2');
        show.innerHTML = `
        <div class="flex">
            <div class="user"><h2>${element.name}</h2>
            <p>${element.user}</p>
            <p>${element.address}</p>
            </div>
        </div>
            `;
        showUsers.appendChild(show);
    } 
})
const dataLoadBtn = (btn) => {
    fetch(`data.json${btn}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}


// This is for disable right click
