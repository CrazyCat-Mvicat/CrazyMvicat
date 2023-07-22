// let name = 'Alex';

// let mainPhoto = document.getElementsByClassName('main__photo')[0]
// let mainSubtitle = document.getElementsByClassName('main__subtitle')[0]

// mainPhoto.addEventListener('click', function () {
//     mainPhoto.style.transform = '100px'
// })
const a = 500; // variable (not change)


let notification = document.getElementsByClassName("notification")[0];

notification.addEventListener('click', function () {
    notification.style.opacity = 0;
    fetch("http://127.0.0.1:3002/delete-notification")
        .then((res)=>(res.json()))
        .then(json=>{
          // json {result: 200} {error: 400} python/c#/php
        })
})