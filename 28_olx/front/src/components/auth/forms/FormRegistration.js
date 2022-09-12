import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {toast} from "react-toastify"

export default function FormRegistration () {

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required("Почта обязательная")
            .email("Формат почты не верный"),
        password: Yup.string()
            .required('Пароль обязательный')
            .min(3, 'Минимальная длинна пароля 3')
            .matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g ,'Ваш пароль слишком простой'),
        confirmPwd: Yup.string()
            .required('Повторите пароль')
            .oneOf([Yup.ref('password')], 'Ваши пароли не совпадают'),
    })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState

    const onSubmit = function (data) {
        console.log(data)
        fetch('http://localhost:3333/api' +
            '/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                let a = res.json()
                console.log(a)
                if (res.status !== 201){
                    switch (res.status){
                        case 422:
                            toast.error(" Сервер не может зашифровать пароль")
                            break
                        case 403:
                            toast.error(" Такой пользователь уже существует")
                            break
                    }
                    return null
                }
                return res.json()
            })
            .then(data=> {
                if (data === null) {
                    // Ответ от сервера с ошибкой
                    console.log("Я ничего не делаю")
                    return
                }
                console.log(data)
                localStorage.setItem('jwtToken', data.token)
            })
            .catch(err=> {
                toast.error("<h4>Произошла ошибка</h4>" + err.message())
            })
    }

    return (
        <div className="container mt-5">
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        {...register('email')}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        name="confirmPwd"
                        type="password"
                        {...register('confirmPwd')}
                        className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
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