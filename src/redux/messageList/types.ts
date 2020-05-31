export interface Message {
    text: string;
    read: boolean;
    id: string;
    createdOn: Date;
    readOn: Date | undefined;
    updatedOn: Date;
}

export interface MessageListState {
    messages: Message[];
}

export const messageListActionTypes = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    DELETE_MESSAGE: 'DELETE_MESSAGE',
    DELETE_ALL_MESSAGES: 'DELETE_ALL_MESSAGES',
    TOGGLE_MESSAGE: 'TOGGLE_MESSAGE',
    TOGGLE_ALL_MESSAGES: 'TOGGLE_ALL_MESSAGES',
    UPDATE_MESSAGE: 'UPDATE_MESSAGE',
};

export interface AddMessageAction {
    type: typeof messageListActionTypes.ADD_MESSAGE;
    payload: {
        text: string;
        id: string;
        createdOn: Date;
    };
}

export interface DeleteMessageAction {
    type: typeof messageListActionTypes.DELETE_MESSAGE;
    payload: {
        id: string;
    };
}

export interface DeleteAllMessagesAction {
    type: typeof messageListActionTypes.DELETE_ALL_MESSAGES;
}

export interface ToggleAllMessagesAction {
    type: typeof messageListActionTypes.TOGGLE_ALL_MESSAGES;
    payload: {
        readOn: Date;
    };
}

export interface ToggleMessageAction {
    type: typeof messageListActionTypes.TOGGLE_MESSAGE;
    payload: {
        id: string;
        readOn: Date;
    };
}

export interface UpdateMessageAction {
    type: typeof messageListActionTypes.UPDATE_MESSAGE;
    payload: {
        id: string;
        text: string;
        updatedOn: Date;
    };
}

export type MessageListAction =
    | AddMessageAction
    | DeleteMessageAction
    | DeleteAllMessagesAction
    | ToggleMessageAction
    | ToggleAllMessagesAction
    | UpdateMessageAction;
