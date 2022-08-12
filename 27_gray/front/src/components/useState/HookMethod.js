import {useState} from "react";


export default function HookMethod(props) {

    // Имя переменной, Имя функции которая ее изменяет
    const [counter, setCounter] = useState(localStorage.getItem('counter_hook')||0);
    const [userName, setUserName] = useState('name');
    const [userEmail, setUserEmail] = useState('email');


    const plus = () => {
        setCounter(counter+1)
        localStorage.setItem('counter_hook', counter)
    }
    const minus = () => {
        setCounter(counter-1)
        localStorage.setItem('counter_hook', counter)
    }

    const onSubmit = () => {
      let data = {
          counter: counter,
          name: userName,
          email: userEmail
      }
      console.log(data)
    }

    return (
        <>
            {counter}
            <input type="number"
                   value={counter}
                   onChange={(e) => {setCounter(parseInt(e.target.value))}} name='counter'/>
            <input type="text" value={userEmail}
                   onChange={(e) => {setUserEmail(e.target.value)}}/>
            <button onClick={plus} type="button">+</button>
            <button onClick={minus} type="button">-</button>
            <button onClick={onSubmit} type="button"> Send </button>
        </>
    )
}