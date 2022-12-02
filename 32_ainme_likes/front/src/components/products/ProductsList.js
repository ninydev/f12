/**
 * Формирует запрос на получение списка продуктов
 * Отрисовывает каждую карточку товара через цикл
 * передавая пропсами ее на  ProductItem
 */


import {useState} from "react";
import ProductItem from "./ProductItem";

export default function ProductsList () {

    const [products, setProducts] = useState([])

    const loadAll = function () {
        // toast.error('?page=' + page + "&per_page=" + per_page)
        fetch('http://localhost:3333/api' + '/products'  ,
            {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Back  узнает пользователя по его ключу
                'authorization': localStorage.getItem('jwtToken') //
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
                console.log(data)
            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })
    }

    return(
        <ul>
            {products.map(product => (
                    <ProductItem key={product._id} product={product}></ProductItem>
            ))
            }

        </ul>
    )

}

