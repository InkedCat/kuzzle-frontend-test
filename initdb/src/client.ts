import { Kuzzle, WebSocket } from 'kuzzle-sdk';

function createClient(): Kuzzle {
    const client = new Kuzzle(
    	new WebSocket('localhost')
    );
      
    client.on("connected", () => {
    	console.log(`Successfully connected to the Kuzzle instance via Kuzzle-SDK-${client.sdkVersion}\n`)
    })
      
    client.on("networkError", () => {
    	console.error("An error occurred while communicating with the Kuzzle instance\n")
    })
      
	return client;
}

export default createClient;