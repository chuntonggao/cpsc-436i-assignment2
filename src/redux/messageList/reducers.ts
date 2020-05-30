import { v4 as uuid } from 'uuid';

import {
    AddMessageAction,
    DeleteMessagesAction,
    Message,
    MessageListAction,
    messageListActionTypes,
    MessageListState,
    ToggleMessagesAction,
    UpdateMessageAction,
} from './types';

const initialState: MessageListState = {
    messages: [
        {
            text: 'This is a read message',
            read: true,
            id: uuid(),
        },
        {
            text: 'This is an unread message',
            read: false,
            id: uuid(),
        },
    ],
};

export default (
    state: MessageListState = initialState,
    action: MessageListAction
): MessageListState => {
    switch (action.type) {
        case messageListActionTypes.ADD_MESSAGE: {
            const { text, id } = (action as AddMessageAction).payload;
            const newMessage = {
                text: text,
                read: false,
                id: id,
            };
            return {
                messages: [...state.messages, newMessage],
            };
        }

        case messageListActionTypes.DELETE_MESSAGES: {
            const updatedMessages: Message[] = state.messages.filter(
                message =>
                    !(action as DeleteMessagesAction).payload.ids.has(message.id)
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

        case messageListActionTypes.TOGGLE_MESSAGES: {
            const updatedMessages: Message[] = state.messages.map(message => {
                if ((action as ToggleMessagesAction).payload.ids.has(message.id)) {
                    return { ...message, read: !message.read };
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
            const { id, text } = (action as UpdateMessageAction).payload;
            for (const message of updatedMessages) {
                if (message.id === id) {
                    message.text = text;
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
