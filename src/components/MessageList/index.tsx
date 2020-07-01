import { Spin } from 'antd';
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import {
    deleteAllMessages,
    initMessageList,
    toggleAllMessages,
} from '../../redux/messageList/actions';
import { Message } from '../../redux/messageList/types';
import { RootState } from '../../redux/store';
import { fetchAndSetMessageList } from '../../util';
import MessageItem from '../MessageItem';
import NewMessageForm from '../NewMessageForm/';

interface DispatchProps {
    deleteAllMessages: typeof deleteAllMessages;
    initMessageList: typeof initMessageList;
    toggleAllMessages: typeof toggleAllMessages;
}

const mapDispatchToProps = {
    deleteAllMessages,
    initMessageList,
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
    loading: boolean;
}

const initialState: MessageListState = {
    selectedIds: new Set<string>(),
    loading: false,
};

class MessageList extends React.Component<MessageListProps, MessageListState> {
    state = initialState;

    async componentDidMount(): Promise<void> {
        this.setState({ loading: true });
        await fetchAndSetMessageList();
        this.setState({ loading: false });
    }

    toggleAllMessages = async (): Promise<void> => {
        console.log('here');
        this.setState({ loading: true });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const promises: Promise<any>[] = [];
        for (const message of this.props.messages) {
            promises.push(
                axios.put(`http://localhost:3300/messages/${message.id}`, {
                    updatedFields: { ...message, read: !message.read },
                })
            );
        }
        console.log('toggle all');
        console.log(promises);
        await Promise.all(promises);
        await fetchAndSetMessageList();

        this.setState({ loading: false });
    };

    deleteAllMessages = async (): Promise<void> => {
        this.setState({ loading: true });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const promises: Promise<any>[] = [];
        for (const message of this.props.messages) {
            promises.push(
                axios.delete(`http://localhost:3300/messages/${message.id}`)
            );
        }
        await Promise.all(promises);
        await fetchAndSetMessageList();

        this.setState({ loading: false });
    };

    render(): JSX.Element {
        // const toggleAllButton = (
        //     <input
        //         id="toggle-all-btn"
        //         className="hide"
        //         type="checkbox"
        //         onClick={this.toggleAllMessages}
        //     />
        // );
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
            <Spin spinning={this.state.loading}>
                <div className="content-div">
                    <div className="message-create-div">
                        {/* {this.props.messages.length > 0 && toggleAllButton} */}
                        <NewMessageForm />
                    </div>
                    <div className="messages-view-box">
                        <br />
                        <ul>{messagesItems}</ul>
                    </div>
                    <a id="delete-all-button" onClick={this.deleteAllMessages}>
                        DELETE ALL
                    </a>
                </div>
            </Spin>
        );
    }
}

// a reference to the type definitions of connect
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16990#issuecomment-507509882
export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);
