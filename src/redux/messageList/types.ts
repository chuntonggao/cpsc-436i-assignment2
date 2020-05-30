export interface Message {
    text: string;
    read: boolean;
    id: string;
}

export interface MessageListState {
    messages: Message[];
}

export const messageListActionTypes = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    DELETE_MESSAGES: 'DELETE_MESSAGES',
    DELETE_ALL_MESSAGES: 'DELETE_ALL_MESSAGES',
    TOGGLE_MESSAGES: 'TOGGLE_MESSAGES',
    TOGGLE_ALL_MESSAGES: 'TOGGLE_ALL_MESSAGES',
    UPDATE_MESSAGE: 'UPDATE_MESSAGE',
};

export interface AddMessageAction {
    type: typeof messageListActionTypes.ADD_MESSAGE;
    payload: {
        text: string;
        id: string;
    };
}

export interface DeleteMessagesAction {
    type: typeof messageListActionTypes.DELETE_MESSAGES;
    payload: {
        ids: Set<string>;
    };
}

export interface DeleteAllMessagesAction {
    type: typeof messageListActionTypes.DELETE_ALL_MESSAGES;
}

export interface ToggleAllMessagesAction {
    type: typeof messageListActionTypes.TOGGLE_ALL_MESSAGES;
}

export interface ToggleMessagesAction {
    type: typeof messageListActionTypes.DELETE_MESSAGES;
    payload: {
        ids: Set<string>;
    };
}

export interface UpdateMessageAction {
    type: typeof messageListActionTypes.UPDATE_MESSAGE;
    payload: {
        id: string;
        text: string;
    };
}

export type MessageListAction =
    | AddMessageAction
    | DeleteMessagesAction
    | DeleteAllMessagesAction
    | ToggleMessagesAction
    | ToggleAllMessagesAction
    | UpdateMessageAction;
