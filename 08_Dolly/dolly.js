// Объект девочка
let dolly = {
    name: "Dolly",
    render(){
        let uDiv = document.getElementById("Universe")
        let myDiv = document.createElement("div")
        myDiv.id = "dollyDiv"
        myDiv.onclick = dolly.sayName
        let myPhoto = document.createElement("img")
        myPhoto.src = 'img/doll.png'
        myDiv.appendChild(myPhoto)
        uDiv.appendChild(myDiv)
    },
    setDress(dress){
        let myDiv = document.getElementById("dollyDiv")

        let dressDiv = document.getElementById("dressDiv")
        if(dressDiv) myDiv.removeChild(dressDiv)
        dressDiv = document.createElement("div")

        dressDiv.id = "dressDiv"
        dressDiv.className = dress.className
        if (dress.img){
            let img = document.createElement("img")
            img.src = dress.img
            dressDiv.appendChild(img)
        }
        myDiv.appendChild(dressDiv)
    },
    sayName(){
        let myDiv = document.getElementById("dollyDiv")
        let nameDiv = document.createElement("div")
        nameDiv.id = "dollyName"
        nameDiv.innerText = "My name is Dolly"
        nameDiv.style.background = "gray"
        myDiv.appendChild(nameDiv)
        setTimeout(function () {
            myDiv.removeChild(nameDiv)
        }, 1000)
    }
}

dolly.render()