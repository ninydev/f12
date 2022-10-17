import { createServer } from "http"
import {Server} from "socket.io"
import { instrument } from "@socket.io/admin-ui";

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:63342", "http://localhost:3000"],
        credentials: true
    }
});

instrument(io, {
    auth: false
});

httpServer.listen(3332);