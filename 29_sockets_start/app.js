// Создадим простой веб сервер для поддержки CORS
import { createServer } from "http"
const httpServer = createServer()

// Создадим пассивный сокет - и будем ждать соединений
import {Server} from "socket.io"
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:63342"
    }
});

/**
 * Поведение нашей системы - когда кто-то пытается присоединиться
 */
io.on("connection" , (socket) => {
    // Когда кто-то приходит - отправляем ему сообщение типа Hello
    console.log("New Connection")
    // socket.emit("SomeName", "Отправить сообщение этого типа")
    socket.broadcast.emit("NewConnection" , "Кто то еще пришел на сервер")

    socket.on("newMsg", (args) => {
        console.log(args)
        socket.broadcast.emit("ServerNewMessage", args) // Всем кроме себя
    })

})

httpServer.listen(3000);

