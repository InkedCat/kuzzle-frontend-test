import { messageNotifier } from './Notifier';
import createClient from './client';
import { MessageSchema } from './interfaces/Message';

const databaseName = "kuzzle-chatdb";
const collectionName = "chat-messages";

const client = createClient();

async function run() {
	try {
		await client.connect();

		const info = await client.server.info({});
		console.log("Kuzzle instance infos:");
		console.log(info.serverInfo);
		console.log();

		if(!client.index.exists(databaseName)) {
			await client.index.create(databaseName);
			console.log("Successfully created the database\n");
		}
	
		await client.collection.create(databaseName, collectionName, MessageSchema);
		console.log("Successfully created the database\n");

		await client.realtime.subscribe(databaseName, collectionName, {}, messageNotifier);
		console.log("Successfully subscribed to the collection events\n")

		const testMessage = {
			"author": "Me",
			"content": "Hello World !"
		};

		await client.document.create(databaseName, collectionName, testMessage)
	} catch (error) {
		console.error(error);
	} finally {
		client.disconnect();
	}
}

run()


