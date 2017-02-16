import { createServer } from 'net';

export class Router {
    private targets: { [key: number]: any }

    constructor(private idBytes: number = 4) {}

    public start() {

    }

    protected startServer() {
        createServer(socket => {
            socket.on('data', data => this.handlePacket(data))
        });
        createServer(socket => {
            
        });
    }

    protected handlePacket(data: Buffer) {
        let id =  data.readUIntBE(0, this.idBytes);
        let target = this.targets[id];
    }
}

export class TlsRouter extends Router {
    protected startServer() {
        
    }
}