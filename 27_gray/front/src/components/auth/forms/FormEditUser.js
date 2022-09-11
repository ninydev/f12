import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {toast} from "react-toastify"

export default function FormEditUser() {

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required("Почта обязательная")
            .email("Формат почты не верный"),
        name: Yup.string()
            .required("Ваше имя обязательно"),
        password: Yup.string()
            .required('Пароль обязательный')
            .min(3, 'Минимальная длинна пароля 3')
            .matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g ,'Ваш пароль слишком простой'),
    })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState

    /**
     * Обновление данных пользователя
     * @param data
     */
    const onSubmit = function (data){
    }

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
                if (res.status === 403) {
                    setError({message: "Вы не авторизованы"})
                    return null
                }
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
                setUser(data) // прогрузить пользователя
                setPreload(false) // Убрать прелоадер
                setError(null)
            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
                setError(err)
            })
    }

    /**
     * Хранение полученных данных с сервера
     */
    const [user,setUser] = useState({}) // Сохранение полученного пользователя
    const [isPreload, setPreload] = useState(true) // Показывать - загружены ли данные
    const [err, setError] = useState(null) // Сохранить состояние ошибки общения с сервером

    // Получить данные о пользователе при создании компонента
    useEffect( () => {
        console.log("Получаю данные о пользователе")
        getUser()
    }, [])

    // Если была ошибка обращения к серверу - вывести ее пользователю
    if(err) {
        return (
            <div className="alert alert-danger" role="alert">
                {err.message}
            </div>
        )
    }

    // Если данные не загружены - показать preload
    if (isPreload) {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    // Если данные загружены, и не было ошибок - вывести форму
    return (
        <div className="container mt-5">
            <h2>Ваш профиль</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        disabled
                        name="email"
                        type="email"
                        value={user.email}
                        {...register('email')}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                <div className="form-group">
                    <label>Avatar</label>
                    <input
                        name="avatar"
                        type="file"
                        {...register('avatar')}
                        className={`form-control ${errors.avatar ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.avatar?.message}</div>
                </div>
                <div className="form-group">
                    <label>Ваше имя</label>
                    <input
                        name="name"
                        type="text"
                        value={user.name}
                        {...register('name')}
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.name?.message}</div>
                </div>
                <div className="form-group">
                    <label>Телефон</label>
                    <input
                        name="phone"
                        type="tel"
                        value={user.phone}
                        {...register('phone')}
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.phone?.message}</div>
                </div>
                <div className="form-group">
                    <label>Статус</label>
                    <input
                        name="status"
                        type="text"
                        value={user.status}
                        {...register('status')}
                        className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.status?.message}</div>
                </div>
                <div className="form-group">
                    <hr/>
                    <label>Ваш пароль для изменений</label>
                    <input
                        name="password"
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )

}