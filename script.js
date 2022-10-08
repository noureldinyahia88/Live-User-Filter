const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listitem = []

getdata()

filter.addEventListener("input",(e)=>filterData(e.target.value))

async  function getdata() {
    const res = await fetch('https://randomuser.me/api?results=50')
    
    const { results } = await res.json()

    //clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')
        listitem.push(li)
        li.innerHTML = `
                    <img src="${user.picture.large}" alt="${user.name.first}">
                    <div class="user-info">
                        <h4>${user.name.first} ${user.name.last}</h4>
                        <p>${user.location.city}, ${user.location.country}</p>
                    </div>`

                    result.appendChild(li)
                    console.log(li)
    })
    
}

function filterData(searchTerm) {
    listitem.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}