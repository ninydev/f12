let films = {
    data: [],
    elId: "listFilms", // Id элемента, где будет строится работа с жанрами
    rootElement: {}, // ссылка на главный элемент

    init: function (){
        this.rootElement =  document.getElementById(this.elId)
        this.loadFromLocalStorage()
        console.log(this.data)
    },

    render: function () {
        this.renderData()
        this.renderForm()
    },

    renderData: function () {
        let h3 = document.createElement("h3")
        h3.innerText = "Список фильмов"
        this.rootElement.innerHTML = ""
        this.rootElement.appendChild(h3)
        let ul = document.createElement("ul")
        for(let i = 0; i < this.data.length; i++) {
            let li = document.createElement("li")
            li.dataset.id = this.data[i].id
            li.innerText = this.data[i].name
            ul.appendChild(li)
        }
        this.rootElement.appendChild(ul)
    },

    renderForm: function () {
        let div = document.createElement("div")
        let inLabel = document.createElement("label")
        inLabel.innerText = "Название фильма"
        inLabel.htmlFor = "filmName"
        div.appendChild(inLabel)
        let inName = document.createElement("input")
        inName.id = "filmName"
        inName.name = "filmName"
        inName.type = "text"
        div.appendChild(inName)

        let divDirector = document.createElement("div")
        divDirector.id = "divFilmDirectors"
        let inLabelDirectors = document.createElement("label")
        inLabelDirectors.innerText = "Режиссеры"
        inLabelDirectors.htmlFor = "filmDirectors"
        divDirector.appendChild(inLabelDirectors)

        peoples.renderSelect(divDirector, "filmDirectors")
        div.appendChild(divDirector)

        let inSave = document.createElement("input")
        inSave.type = "button"
        inSave.value = "Добавить"
        inSave.onclick = function () {
            if(document.getElementById("filmName").value.length === 0) {
                document.getElementById("filmName").style.border = '1px solid red'
                return
            }
            if(films.data.find(f => f.name === document.getElementById("filmName").value)){
                alert("Такой уже есть")
                return
            }
            let newFilm = {
                id: generateUUID(),
                name: document.getElementById("filmName").value,
                // directors: document.getElementById("filmDirectors").value
            }
            console.log(document.getElementById("filmDirectors").value)
            films.data.push(newFilm)
            films.saveToLocalStorage()
            films.render()
        }
        div.appendChild(inSave)


        this.rootElement.appendChild(div)
    },

    saveToLocalStorage: function () {
        localStorage.setItem('films', JSON.stringify(this.data))
    },

    loadFromLocalStorage: function () {
        if(localStorage.getItem('films'))
            this.data = JSON.parse(localStorage.getItem('films'))
    },

    clearLocalStorage: function () {
        localStorage.clear()
    },


}