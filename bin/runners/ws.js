import { WebSocketServer } from 'ws';

const run = async () => {
  const server = new WebSocket('ws://64.226.116.153:8080');

  


  server.on('connection', (socket) => {
    console.log('New connection established.');

    socket.on('message', (message) => {
      
      console.log(`Received: ${message}`);

     
      server.clients.forEach(client => {
        if (client.readyState === client.OPEN && client !== socket) {
          client.send(`User: ${message}`);
        }
      });

    });

    socket.on('close', () => {
      console.log('Connection closed.');
    });
  });

  console.log('WebSocket server is running on ws://localhost:8080');
};
export default run;
