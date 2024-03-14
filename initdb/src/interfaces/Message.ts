import { CollectionMappings } from "kuzzle-sdk";

const MessageSchema : {mappings : CollectionMappings} = {
    mappings: {
        properties: {
            author: { type : "keyword" },
            content: { type : "keyword" },
            timestamp: { type : "date" }
        },
        dynamic: "strict",
    }
}

export {MessageSchema};