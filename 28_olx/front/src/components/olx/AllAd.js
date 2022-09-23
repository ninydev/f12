import CreateAd from "./CreateAd";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export default function AllAd(){

    const [ads, setAds] = useState([])
    const [user, setUser] = useState({name: "гость", _id: 0}) // По умолчанию у нас гость

    const loadAd = function () {
        fetch('http://localhost:3333/api' + '/ad',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('jwtToken')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => {
                // console.log(res)
                if(res.status !==200) {
                    toast.error("Ошибка")
                    return null
                }
                return res.json()
            })
            .then(data => {
                if(data === null) {
                    console.log("Я ничего не делаю")
                    return
                }
                toast.success("Вы успешно получили объявления")
                console.log(data)
                setAds(data)
            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })
    }

    const deleteAd = function (ev) {
        console.log("Start Del")
        console.log(ev.target.value)
        let id = ev.target.value

        fetch('http://localhost:3333/api' + '/ad/' + id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('jwtToken')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => {
                console.log(res)
                console.log(res.status)
                if(res.status === 204) {
                    toast.success(" Вы успешно удалили запись")
                    loadAd()
                    return
                }
                toast.error(" Произошла ошибка удаления ")

            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })


    }


    useEffect(() => {
        loadAd()
        if ( localStorage.getItem('user') ){ // Если есть данные по пользователю - восстановить их
            setUser(JSON.parse (localStorage.getItem('user')))
        }
    }, [])


    return (
        <>
            <div> { user.name} </div>
            <ul>
            {ads.map(ad => (
                <li key={ad._id}>
                    <p>{ad.title}</p>
                    { ad.author_id === user._id ? <p> <button> Edit </button> <button value={ad._id} onClick={deleteAd}> Delete </button>  </p> : " Не мое" }
                    {/*<p>{ad.message}</p>*/}
                    {/*<p>Цена {ad.price}$</p>*/}
                    {/*<p>Город {ad.city}</p>*/}
                    {/*<p>Район {ad.location}</p>*/}
                </li>
            ))
            }
        </ul>
        </>
    )
}