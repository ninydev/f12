// Создадим простой веб сервер для поддержки CORS
import express from 'express'
const app = express()

import { createServer } from "http"
const httpServer = createServer(app)


// Создадим пассивный сокет - и будем ждать соединений
import {Server} from "socket.io"
const io = new Server(httpServer, {
    cors: {
        origin: ["https://admin.socket.io", "http://localhost:63342", "http://localhost:3000"],
        credentials: true
    }
});


// Админка
import { instrument } from "@socket.io/admin-ui"
instrument(io, {
    auth: false
});

// При открытии магазина у нас 10 яблок
let appleCount = 10

/**
 * Поведение нашей системы - когда кто-то пытается присоединиться
 */
io.on("connection" , (socket) => {
    console.log("+ Кто то пришел в магазин")

    io.emit('incoming', io.engine.clientsCount)

    // Тому кто пришел говорим сколько у нас яблок
    // тогда на фронт оно прийдет в socket.on('message'
    socket.send(appleCount)

    socket.on('plus', () => {
        appleCount++
        // socket.emit('plus', appleCount) // Отправка себе
        // socket.broadcast.emit('plus', appleCount) // Всем кроме себя
        io.emit('plus', appleCount)
    })

    socket.on('minus', () => {
        appleCount--
        // socket.emit('minus', appleCount) // Отправка себе
        // socket.broadcast.emit('minus', appleCount) // Всем кроме себя
        io.emit('minus', appleCount)
    })

    // Просто слушаем, что нам говорят
    socket.on('message', (world) => {
        console.log('! Кто то сказал: ' + world);
        // Происходит разбор, что мне сказали
        if(world === 'plus') {
            appleCount++
            socket.emit('plus', appleCount) // Отправка себе
            socket.broadcast.emit('plus', appleCount) // Всем кроме себя
        }
        else {
            appleCount--
            socket.emit('minus', appleCount)
            socket.broadcast.emit('minus', appleCount)
        }
        //*--  Я говорю только одному - кто приходил
        socket.send(appleCount)
        //*-- Я говорю всем, кроме того кто приходил
        socket.broadcast.emit('message', appleCount)
    })

    socket.on('disconnect', function() {
        console.log('- Кто то ушел с магазина')
    })

    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    })
})


app.get('/test', function (request, response) {
    response.send("Test: " + io.engine.clientsCount).status(200)
})

app.get('/plus', function (request, response) {
    appleCount++
    response.send("Apple count: " + appleCount).status(200)
    io.emit('plus', appleCount)
})

app.get('/minus', function (request, response) {
    appleCount--
    response.send("Apple count: " + appleCount).status(200)
    io.emit('minus', appleCount)
})

httpServer.listen(3232);

