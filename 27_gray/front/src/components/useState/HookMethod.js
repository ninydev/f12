import {useEffect, useState} from "react";


export default function HookMethod(props) {

    // Имя переменной, Имя функции которая ее изменяет
    const [counter, setCounter] = useState(localStorage.getItem('counter_hook')||0);
    const [userName, setUserName] = useState('name');
    const [userEmail, setUserEmail] = useState('email');


    useEffect( () => {
        console.log("Я создался")
        return () => {
            alert('Do some cleanup');
        }
    }, []);


    useEffect( () => {
        console.log("1 Будет запускаться в момент когда сменился counter")
    }, [counter])

    useEffect( () => {
        console.log("2 Будет запускаться в момент когда сменился counter")
    }, [counter])

    const plus = () => {
        setCounter(counter+1)
        localStorage.setItem('counter_hook', counter)
    }
    const minus = () => {
        setCounter(counter-1)
        localStorage.setItem('counter_hook', counter)
    }

    return (
        <>
            {counter}
            <input type="number"
                   value={counter}
                   onChange={(e) => {setCounter(parseInt(e.target.value))}} name='counter'/>
            <button onClick={plus} type="button">+</button>
            <button onClick={minus} type="button">-</button>
        </>
    )
}