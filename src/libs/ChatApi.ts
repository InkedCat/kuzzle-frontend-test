import axios, { AxiosError } from 'axios';
import { convertToMessageList } from './MessageTransformer';
import type { APIError, APIMessage, ViewMessage } from '@/interfaces/Message';
import type { SearchResult } from 'kuzzle-sdk';

async function getMessages(): Promise<ViewMessage[] | AxiosError<SearchResult<APIMessage>>> {
    try {
        const response = await axios.get('http://localhost:7512/_/chat/messages');
        return convertToMessageList(response.data.result.hits);
    } catch (error) {
        if(axios.isAxiosError(error)) return error;

        console.error('Error getting messages:', error);
        throw error;
    }
}

async function postMessage(content : string, author: string): Promise<void | AxiosError<APIError>> {
    try {
        const response = await axios.post('http://localhost:7512/_/chat/messages', {author: author, content: content});
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error))  return error;

        console.error('Error posting message:', error);
        throw error;
    }
}

export { getMessages, postMessage};