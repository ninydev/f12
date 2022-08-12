import {useState} from "react";

export default function SelectNovaPoshta() {

    // Ключ
    const key = "0a97c8c98d19e6e4097fea363302f17b"

    // Место хранения областей
    const [areas, setAreas] = useState([]);

    // Метод получения областей
    const loadAreas = () => {
        let data = {
            "apiKey": key,
            "modelName": "Address",
            "calledMethod": "getAreas"
        }

        fetch('https://api.novaposhta.ua/v2.0/json/', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })
            .then(inAreas => {
              console.log(inAreas)
                setAreas(inAreas.data)
            })
            .catch(err=> {
                console.log("err")
                console.log(err)
            })
    }



    return(<>
        <button type="button" onClick={loadAreas}>load</button>
        </>)
}