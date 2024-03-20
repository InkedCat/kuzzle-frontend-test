import type { APIMessage, ViewMessage } from "@/interfaces/Message";
import type { KHit } from "kuzzle-sdk";

function convertToMessage(message : APIMessage): ViewMessage {
    return {
        author : message.author,
        content: message.content,
        timestamp: message._kuzzle_info?.createdAt || new Date().getTime()
    }

}

function convertToMessageList(response: KHit<APIMessage>[]): ViewMessage[] {
    return response.map(message => convertToMessage(message._source));
}

export { convertToMessage, convertToMessageList };