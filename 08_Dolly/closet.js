let closet = {
    dresses:  [
        {img: null, name: 'Без одежды', className: 'none'},
        {img: 'img/blueSuit.png', className: 'blueSuit', name: 'Голубой костюмчик'},
        {img: 'img/brownDress.png', className: 'brownDress', name: 'Коричневое платье'},
        {img: 'img/fullBody.png', className: 'fullBody', name: 'Костюмчик'},
        {img: 'img/greenDress.png', className: 'greenDress', name: 'Зеленое платье'},
        {img: 'img/lightGreenDress.png', className: 'lightGreenDress', name: 'Светло-зеленое платье'},
        {img: 'img/orangeDress.png', className: 'orangeDress', name: 'Оранжевое платье'},
    ],
    render() {
        let uDiv = document.getElementById("Universe")
        let closetDiv = document.createElement("div")
        closetDiv.id = "closetDiv"
        let ul = document.createElement("ul")
        closet.dresses.map( dress => {
            console.log(dress)
            let li = document.createElement("li")
            if(dress.img) {
                let img = document.createElement("img")
                img.src = dress.img
                li.appendChild(img)
            }
            let h3 = document.createElement("h3")
            h3.innerText = dress.name
            li.appendChild(h3)
            li.onclick = function () {
                dolly.setDress(dress)
            }
            ul.appendChild(li)
        })
        closetDiv.appendChild(ul)
        uDiv.appendChild(closetDiv)
    }
}

closet.render()