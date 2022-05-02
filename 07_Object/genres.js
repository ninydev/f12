let genres = {
    data: [],   // сами данные
    elId: "listGenres", // Id элемента, где будет строится работа с жанрами
    rootElement: {}, // ссылка на главный элемент

    // метод который настраивает элемент
    init: function () {
        this.rootElement =  document.getElementById(this.elId)
    },

    // Метод, который построит элемент жанры
    render: function () {
        // console.log("построение жанров")
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
    }
}