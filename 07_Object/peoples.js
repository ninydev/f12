let peoples = {
    data: [],
    elId: "listPeoples",
    rootElement: {}, // ссылка на главный элемент

    // метод который настраивает элемент
    init: function () {
        this.rootElement =  document.getElementById(this.elId)
        // peoples.rootElement =  document.getElementById(this.elId)
        this.loadFromLocalStorage()
        console.log(JSON.stringify(this.data))
    },

    saveToLocalStorage: function () {
        localStorage.setItem('peoples', JSON.stringify(this.data))
    },

    loadFromLocalStorage: function () {
        if(localStorage.getItem('peoples'))
            this.data = JSON.parse(localStorage.getItem('peoples'))
    },

    clearLocalStorage: function () {
        localStorage.clear()
    },

    render: function () {
      this.renderData()
      this.renderForm()
    },

    renderData: function () {
        let h3 = document.createElement("h3")
        h3.innerText = "Список деятелей"
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
        inLabel.innerText = "Имя деятеля"
        inLabel.htmlFor = "peopleName"
        div.appendChild(inLabel)
        let inName = document.createElement("input")
        inName.id = "peopleName"
        inName.name = "name"
        inName.type = "text"
        div.appendChild(inName)

        let inSave = document.createElement("input")
        inSave.type = "button"
        inSave.value = "Добавить"
        inSave.onclick = function () {
            if(document.getElementById("peopleName").value.length === 0) {
                document.getElementById("peopleName").style.border = '1px solid red'
                return
            }
            if(peoples.data.find(p => p.name === document.getElementById("peopleName").value)){
                alert("Такой уже есть")
                return
            }
            let newPeople = {
                id: generateUUID(),
                name: document.getElementById("peopleName").value
            }
            peoples.data.push(newPeople)
            peoples.saveToLocalStorage()
            peoples.render()
        }
        div.appendChild(inSave)


        this.rootElement.appendChild(div)
    },

    /**
     *
     * @param rootElement - где построить выпадающий список
     * @param elementId - какой id дать для построенного списка
     */
    renderSelect: function (rootElement, elementId) {
        // let rootElement = document.getElementById(mountId)
        let select = document.createElement("select")
        select.id = elementId
        select.multiple = true
        for(let i = 0; i < peoples.data.length; i++) {
            let option = document.createElement("option")
            option.value = peoples.data[i].id
            option.innerText = peoples.data[i].name
            select.appendChild(option)
        }
        rootElement.appendChild(select)
    }
}