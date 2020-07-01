import {
    AddMessageAction,
    DeleteMessageAction,
    InitMessageListAction,
    Message,
    MessageListAction,
    messageListActionTypes,
    MessageListState,
    ToggleMessageAction,
    UpdateMessageAction,
} from './types';

const initialState: MessageListState = {
    messages: [],
};

export default (
    state: MessageListState = initialState,
    action: MessageListAction
): MessageListState => {
    switch (action.type) {
        case messageListActionTypes.ADD_MESSAGE: {
            const { text, id, createdOn } = (action as AddMessageAction).payload;
            const newMessage = {
                text: text,
                read: false,
                id: id,
                createdOn: createdOn,
                readOn: undefined,
                updatedOn: createdOn,
            };
            return {
                messages: [...state.messages, newMessage],
            };
        }

        case messageListActionTypes.DELETE_MESSAGE: {
            const { id } = (action as DeleteMessageAction).payload;
            const updatedMessages: Message[] = state.messages.filter(
                message => message.id !== id
            );
            return {
                messages: updatedMessages,
            };
        }

        case messageListActionTypes.DELETE_ALL_MESSAGES: {
            return {
                messages: [],
            };
        }

        case messageListActionTypes.INIT_MESSAGE_LIST: {
            return {
                messages: (action as InitMessageListAction).payload.messages,
            };
        }

        case messageListActionTypes.TOGGLE_MESSAGE: {
            const updatedMessages: Message[] = state.messages.map(message => {
                const { id, readOn } = (action as ToggleMessageAction).payload;
                if (message.id === id) {
                    if (message.read === true) {
                        return { ...message, read: false, readOn: undefined };
                    } else {
                        return { ...message, read: true, readOn: readOn };
                    }
                } else {
                    return message;
                }
            });
            return {
                messages: updatedMessages,
            };
        }

        case messageListActionTypes.TOGGLE_ALL_MESSAGES: {
            const numMessages: number = state.messages.length;
            let numReadMessages = 0;

            for (const message of state.messages) {
                if (message.read === true) {
                    numReadMessages = numReadMessages + 1;
                }
            }

            const updatedMessages: Message[] = state.messages.map(message => {
                if (numReadMessages === numMessages) {
                    // if all messages have been read
                    // make all messages unread
                    return { ...message, read: false };
                } else {
                    // otherwise make all messages read
                    return { ...message, read: true };
                }
            });

            return {
                messages: updatedMessages,
            };
        }

        case messageListActionTypes.UPDATE_MESSAGE: {
            const updatedMessages: Message[] = [...state.messages];
            const { id, text, updatedOn } = (action as UpdateMessageAction).payload;
            for (const message of updatedMessages) {
                if (message.id === id) {
                    message.text = text;
                    message.updatedOn = updatedOn;
                }
            }
            return {
                messages: updatedMessages,
            };
        }

        default: {
            return state;
        }
    }
};
