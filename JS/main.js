let elList = document.querySelector('.list')



fetch('https://jsonplaceholder.typicode.com/posts')


.then((res) => res.json())
.then((data) => fn(data))


function fn(data){
    data.forEach(element => {
        let newLi = document.createElement('li')
        newLi.innerHTML = `<div class="card div__card" style="width: 18rem;">
        <img src="https://cdn-icons-png.flaticon.com/512/2099/2099199.png" class="card-img-top div__img" alt="...">
        <div class="card-body div__div">
          <h5 class="card-title div__title">${element.userId}</h5>
          <h5 class="card-title div__title2">${element.id}</h5>
          <h5 class="card-title div__title3">${element.title.toString().split(" ").splice(0,3).join(" ")}</h5>
          <p class="card-text div__title4">${element.body.toString().split(" ").splice(0,9).join(" ")}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
        elList.appendChild(newLi)
    });
}




















