import { v4 as uuid } from 'uuid';

import {
    AddMessageAction,
    DeleteAllMessagesAction,
    DeleteMessageAction,
    InitMessageListAction,
    Message,
    messageListActionTypes,
    ToggleAllMessagesAction,
    ToggleMessageAction,
    UpdateMessageAction,
} from './types';

export const addMessage = (text: string): AddMessageAction => {
    return {
        type: messageListActionTypes.ADD_MESSAGE,
        payload: {
            text: text,
            id: uuid(),
            createdOn: new Date(),
        },
    };
};

export const deleteMessage = (id: string): DeleteMessageAction => {
    return {
        type: messageListActionTypes.DELETE_MESSAGE,
        payload: {
            id: id,
        },
    };
};

export const deleteAllMessages = (): DeleteAllMessagesAction => {
    return {
        type: messageListActionTypes.DELETE_ALL_MESSAGES,
    };
};

export const initMessageList = (
    messages: Array<Omit<Message, 'id'> & { _id: Message['id'] }>
): InitMessageListAction => {
    const newMessages: Message[] = messages.map(message => {
        return { ...message, id: message._id };
    });
    return {
        type: messageListActionTypes.INIT_MESSAGE_LIST,
        payload: {
            messages: newMessages,
        },
    };
};

export const toggleAllMessages = (): ToggleAllMessagesAction => {
    return {
        type: messageListActionTypes.TOGGLE_ALL_MESSAGES,
        payload: {
            readOn: new Date(),
        },
    };
};

export const toggleMessage = (id: string): ToggleMessageAction => {
    return {
        type: messageListActionTypes.TOGGLE_MESSAGE,
        payload: {
            id: id,
            readOn: new Date(),
        },
    };
};

export const updateMessage = ({
    id,
    text,
}: {
    id: string;
    text: string;
}): UpdateMessageAction => {
    return {
        type: messageListActionTypes.UPDATE_MESSAGE,
        payload: {
            id: id,
            text: text,
            updatedOn: new Date(),
        },
    };
};
