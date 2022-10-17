import {io} from "socket.io-client"
import {toast} from "react-toastify"




export default function Notifications () {

    const socket = io('ws://localhost:3232')

    socket.on('plus', (appleCount) => {
        toast.success(appleCount)
    })


    socket.on('minus', (appleCount) => {
        toast.error(appleCount)
    })

    const minus = () => {
        socket.emit('minus')
    }

    const plus = () => {
        socket.emit('plus')
    }
    return(
        <>
            <button onClick={minus}> - </button>
            <button onClick={plus}> + </button>
        </>
    )


}
