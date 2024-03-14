import { Notification } from "kuzzle-sdk";

function messageNotifier(notification: Notification) {
    console.log("\nEvent received:\n")
    console.log(notification);
}

export {messageNotifier};