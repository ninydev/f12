import React, {useEffect} from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        alert("Тут мы отправляем данные на сервер")
    };

    console.log(watch("age")); // watch input value by passing the name of it

    useEffect(() => {
        console.log("err")
        console.log(errors)
    }, [])

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue="test@test.com"
                   {...register("email", { required: true })} />
            {errors.email && <span><br/>Email обязательное поле</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <input
                {...register("name", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.name && <span><br/>Имя обязательное </span>}

            <input type="number"
                   {...register("age", { min: 18, max: 99 })} />
            {errors.age && <span><br/> Возраст должен быть от 18 до 99  </span> }

            <input type="submit" />
        </form>
    );
}