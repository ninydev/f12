let genres = {
    data: [],   // сами данные
    elId: "listGenres", // Id элемента, где будет строится работа с жанрами
    rootElement: {}, // ссылка на главный элемент

    renderSelect: function (mountId, elementId) {
        let rootElement = document.getElementById(mountId)
        let select = document.createElement("select")
        select.id = elementId
        select.multiple = true
        for(let i = 0; i < genres.data.length; i++) {
            let option = document.createElement("option")
            option.value = genres.data[i].id
            option.innerText = genres.data[i].name
            select.appendChild(option)
        }
        rootElement.appendChild(select)
    },

    // метод который настраивает элемент
    init: function () {
        this.rootElement =  document.getElementById(this.elId)
        this.loadFromLocalStorage()
    },

    // Метод, который построит элемент жанры
    render: function () {
        this.renderData()
        this.renderForm()
    },

    renderData: function () {
        let h3 = document.createElement("h3")
        h3.innerText = "Список жанров"
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
        inLabel.innerText = "Название жанра"
        inLabel.htmlFor = "genreName"
        div.appendChild(inLabel)
        let inName = document.createElement("input")
        inName.id = "genreName"
        inName.name = "name"
        inName.type = "text"
        div.appendChild(inName)

        let inSave = document.createElement("input")
        inSave.type = "button"
        inSave.value = "Добавить"
        inSave.onclick = function () {
            if(document.getElementById("genreName").value.length === 0) {
                document.getElementById("genreName").style.border = '1px solid red'
                return
            }
            if(genres.data.find(g => g.name === document.getElementById("genreName").value)){
                alert("Такой уже есть")
                return
            }
            let newGenre = {
                id: generateUUID(),
                name: document.getElementById("genreName").value
            }
            genres.data.push(newGenre)
            genres.saveToLocalStorage()
            genres.render()
        }
        div.appendChild(inSave)


        this.rootElement.appendChild(div)
    },

    saveToLocalStorage: function () {
        localStorage.setItem('genres', JSON.stringify(this.data))
    },

    loadFromLocalStorage: function () {
        if(localStorage.getItem('genres'))
            this.data = JSON.parse(localStorage.getItem('genres'))
    },

    clearLocalStorage: function () {
        localStorage.clear()
    },

}