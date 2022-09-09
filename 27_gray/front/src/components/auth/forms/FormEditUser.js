import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {toast} from "react-toastify"

export default function FormEditUser() {

    /**
     * Получение данных о текущем пользователе по ключу
     */
    const getUser = function () {
        fetch('http://localhost:3333/api' +
            '/auth/getMe',{
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
                toast.success(data.email)
                console.log(data)
            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })
    }

    return (
        <div>
            <button type="button" onClick={getUser}>
                получить данные о себе
            </button>
        </div>
    )

}