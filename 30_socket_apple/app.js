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

// При открытии магазина у нас 10 яблок
let appleCount = 10

/**
 * Поведение нашей системы - когда кто-то пытается присоединиться
 */
io.on("connection" , (socket) => {
    console.log("+ Кто то пришел в магазин")

    // Тому кто пришел говорим сколько у нас яблок
    socket.send(appleCount)

    // Просто слушаем, что нам говорят
    socket.on('message', (world) => {
        console.log('! Кто то сказал: ' + world);
        // Происходит разбор, что мне сказали
        if(world === 'plus') {
            appleCount++
            socket.broadcast.emit('plus', appleCount)
        }
        else {
            appleCount--
            socket.broadcast.emit('minus', appleCount)
        }
        //*--  Я говорю только одному - кто приходил
        socket.send(appleCount)
        //*-- Я говорю всем, кроме того кто приходил
        socket.broadcast.emit('message', appleCount)
    })

    socket.on('disconnect', function() {
        console.log('- Кто то ушел с магазина');
    })
})




httpServer.listen(3000);

