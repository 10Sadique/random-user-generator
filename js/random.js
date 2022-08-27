const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=12&gender=female')
        .then((res) => res.json())
        .then((data) => displayUsers(data.results))
}

const displayUsers = (users) => {
    // console.log(users)
    const userContainer = document.getElementById('user-container')

    for (const user of users) {
        console.log(user)
        const userDiv = document.createElement('div')
        userDiv.innerHTML = `
            <div class="h-full bg-zinc-900 rounded-lg shadow-lg">
                <div class="mb-5">
                    <img src="${user.picture.large}" class="rounded-t-lg w-full"/>
                </div>
                <div class="p-3 space-y-2">
                    <h3 class="text-xl font-bold">${user.name.title} ${user.name.first} ${user.name.last}</h3>

                    <p class="text-gray-200"><span class="font-semibold text-white">Email:</span> ${user.email}</p>

                    <p class="text-gray-200"><span class="font-semibold text-white">Location:</span> ${user.location.city}, ${user.location.state}, ${user.location.country} </p>

                    <p class="text-gray-200"><span class="font-semibold text-white">Phone:</span> ${user.cell}</p>
                </div>
            </div>
        `
        userContainer.appendChild(userDiv)
    }
}
