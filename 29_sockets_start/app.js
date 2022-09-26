//
import { createServer } from "http"
const httpServer = createServer()

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
    console.log("New Connection")
    socket.emit("Hello", "World")
})

httpServer.listen(3000);

