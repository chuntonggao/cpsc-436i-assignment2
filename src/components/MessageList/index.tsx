import React from 'react';
import { connect } from 'react-redux';

import {
    deleteAllMessages,
    toggleAllMessages,
} from '../../redux/messageList/actions';
import { Message } from '../../redux/messageList/types';
import { RootState } from '../../redux/store';
import MessageItem from '../MessageItem';
import NewMessageForm from '../NewMessageForm/';

interface DispatchProps {
    deleteAllMessages: typeof deleteAllMessages;
    toggleAllMessages: typeof toggleAllMessages;
}

const mapDispatchToProps = {
    deleteAllMessages,
    toggleAllMessages,
};

interface StateProps {
    messages: Message[];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapStateToProps = (state: RootState) => ({
    messages: state.messageList.messages,
});

interface OwnProps {}

type MessageListProps = DispatchProps & StateProps & OwnProps;

interface MessageListState {
    selectedIds: Set<string>;
}

const initialState: MessageListState = {
    selectedIds: new Set<string>(),
};

class MessageList extends React.Component<MessageListProps, MessageListState> {
    state = initialState;

    render(): JSX.Element {
        const toggleAllButton = (
            <input
                id="toggle-all-btn"
                className="hide"
                type="checkbox"
                onClick={this.props.toggleAllMessages}
            />
        );
        const messagesItems: JSX.Element[] = this.props.messages.map(message => (
            <MessageItem
                text={message.text}
                read={message.read}
                id={message.id}
                key={message.id}
                createdOn={message.createdOn}
                readOn={message.readOn}
                updatedOn={message.updatedOn}
            />
        ));
        return (
            <div className="content-div">
                <div className="message-create-div">
                    {this.props.messages.length > 0 && toggleAllButton}
                    <NewMessageForm />
                </div>
                <div className="messages-view-box">
                    <br />
                    <ul>{messagesItems}</ul>
                </div>
                <a id="delete-all-button" onClick={this.props.deleteAllMessages}>
                    DELETE ALL
                </a>
            </div>
        );
    }
}

// a reference to the type definitions of connect
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16990#issuecomment-507509882
export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);
