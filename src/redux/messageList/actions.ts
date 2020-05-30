import { v4 as uuid } from 'uuid';

import {
    AddMessageAction,
    DeleteAllMessagesAction,
    DeleteMessagesAction,
    messageListActionTypes,
    ToggleAllMessagesAction,
    ToggleMessagesAction,
    UpdateMessageAction,
} from './types';

export const addMessage = (text: string): AddMessageAction => {
    return {
        type: messageListActionTypes.ADD_MESSAGE,
        payload: {
            text: text,
            id: uuid(),
        },
    };
};

export const deleteMessages = (ids: Set<string>): DeleteMessagesAction => {
    return {
        type: messageListActionTypes.DELETE_MESSAGES,
        payload: {
            ids: ids,
        },
    };
};

export const deleteAllMessages = (): DeleteAllMessagesAction => {
    return {
        type: messageListActionTypes.DELETE_ALL_MESSAGES,
    };
};

export const toggleAllMessages = (): ToggleAllMessagesAction => {
    return {
        type: messageListActionTypes.TOGGLE_ALL_MESSAGES,
    };
};

export const toggleMessages = (ids: Set<string>): ToggleMessagesAction => {
    return {
        type: messageListActionTypes.TOGGLE_MESSAGES,
        payload: {
            ids: ids,
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
        },
    };
};
