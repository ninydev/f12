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

    return (<></>)

}
