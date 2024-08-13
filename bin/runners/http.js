import createServer from '../../http/server.js';
import http from 'node:http';

const port = 3000;

const run = async () => new Promise((resolve, reject) => {
    const expressApp = createServer(); 
    const server = http.createServer(expressApp);
    
    expressApp.set('port', port);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        const bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;

        
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                reject(); 
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                reject(); 
                break;
            default:
                throw error;
        }
    }

    function onListening() {
        const addr = server.address();
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        console.log('HTTP server is UP'); 
        resolve();
    }
});

export default run;