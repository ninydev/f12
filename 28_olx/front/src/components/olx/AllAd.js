import CreateAd from "./CreateAd";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export default function AllAd(){

    const [ads, setAds] = useState([])
    const [user, setUser] = useState({name: "гость", _id: 0}) // По умолчанию у нас гость
    const [total, setTotal] = useState(null)
    const [page, setPage] = useState(1)
    const [per_page, setPerPage] = useState(1)

    const loadAd = function () {
        // toast.error('?page=' + page + "&per_page=" + per_page)
        fetch('http://localhost:3333/api'
            + '/ad?page=' + page + "&per_page=" + per_page  ,{
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
                // toast.success("Вы успешно получили объявления")
                console.log(data)
                setTotal(data.total) // Всего объявлений
                // setPage(data.page) // номер текущей страницы
                // setPerPage(data.per_page) // показывать на странице
                setAds(data.data) // Объявления ????
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

    const goPrev = async function () {
        if(page > 1)
        {
            setPage(page - 1)
        } else {
            toast.info('Вы на первой странице')
        }
    }

    const goNext = function () {
        if (page <  total / per_page) {
            setPage(page+1)
        } else {
            toast.info('Вы на последней странице')
        }
    }

    useEffect(() => {
        loadAd()
    }, [page])

    const goPage = function (ev) {
    }

    return (
        <>
            <div> { user.name} </div>
            <div> Page {page} Total: {total} Per_page:{per_page}</div>
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
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={goPrev}>Previous</a></li>
                    <li className="page-item"><a className="page-link">1</a></li>
                    <li className="page-item"><a className="page-link">2</a></li>
                    <li className="page-item"><a className="page-link">3</a></li>
                    <li className="page-item"><a className="page-link" onClick={goNext}>Next</a></li>
                </ul>
            </nav>
        </>
    )
}