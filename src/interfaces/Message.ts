import type { KDocumentContent, SearchResult } from "kuzzle-sdk";

interface ViewMessage {
    author: string
    content: string
    timestamp: number
}

interface APIMessage extends KDocumentContent {
    author: string
    content: string
}

interface APIError extends SearchResult<null> {
    error: {
        message:string
    }
}

export type { ViewMessage, APIMessage, APIError};