let page = 1
const getPhotos = async (jwt) => {
    try {
        const response = await fetch(`http://localhost:3000/api/photos?page=${page}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        const {
            data
        } = await response.json()
        console.log(data)
        if (data) {
            appendPhotosToFeed(data)
            if (page === 1) {
                toggleFormAndFeed('js-form-wrapper', 'js-feed-wrapper')
            }
            page = page + 1
        }
    } catch (err) {
        localStorage.clear()
        console.error(`Error: ${err}`)
    }
}
const postData = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const {
            token
        } = await response.json()
        localStorage.setItem('jwt-token', token)
        return token
    } catch (err) {
        console.error(`Error: ${err}`)
    }
}
const toggleFormAndFeed = (form, table) => {
    $(`#${form}`).toggle();
    $(`#${table}`).toggle();
    $("#boton").toggle();
    $(`#js-logout-wrapper`).toggle()
}
const appendPhotosToFeed = (data) => {
    $.each(data, (i, item) => {
        let card = `<div class="card my-4" style="width: 18rem;" >
<img src="${item.download_url}" class="card-img-top" width="280px"  alt="...">
<div class="card-body">
<p class="card-text">
Autor: ${item.author}
</p>
</div>
</div>`
        $(`#js-feed-photos`).append(card);
    })
}
$('#js-form-wrapper').submit(async (event) => {
    event.preventDefault()
    const email = document.getElementById('js-input-email').value
    const password = document.getElementById('js-input-password').value
    console.log(password)
    console.log(email)
    const JWT = await postData(email, password)
    getPhotos(JWT)
})

$("#boton").click(function (e) { 
    e.preventDefault();
    let jwt = localStorage.getItem('jwt-token')
    getPhotos(jwt) 
});



const init = async () => {
    const token = localStorage.getItem('jwt-token')
    if (token) {
        getPhotos(token)
    }
}
init()