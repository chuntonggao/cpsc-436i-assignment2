import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

import {
    deleteMessages,
    toggleMessages,
    updateMessage,
} from '../../redux/messageList/actions';
import { Message } from '../../redux/messageList/types';
import { RootState } from '../../redux/store';

interface DispatchProps {
    deleteMessages: typeof deleteMessages;
    toggleMessages: typeof toggleMessages;
    updateMessage: typeof updateMessage;
}

const mapDispatchToProps = {
    deleteMessages,
    toggleMessages,
    updateMessage,
};

interface StateProps {}

const mapStateToProps = null;

type OwnProps = Message;

type MessageItemProps = DispatchProps & StateProps & OwnProps;

interface MessageItemState {
    typing: boolean;
    input: string;
}

class MessageItem extends React.Component<MessageItemProps, MessageItemState> {
    constructor(props: MessageItemProps) {
        super(props);
        this.state = {
            typing: false,
            input: this.props.text,
        };
        this.resetState = this.resetState.bind(this);
        this.toggleRead = this.toggleRead.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleFocusOut = this.handleFocusOut.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
        this.startTyping = this.startTyping.bind(this);
        this.dispatchUpdate = this.dispatchUpdate.bind(this);
        this.dispatchDelete = this.dispatchDelete.bind(this);
    }

    resetState(): void {
        this.setState({ typing: false, input: this.props.text });
    }

    toggleRead(): void {
        const set: Set<string> = new Set<string>();
        set.add(this.props.id);
        this.props.toggleMessages(set);
    }

    handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            if (this.state.input) {
                this.dispatchUpdate();
            } else {
                this.dispatchDelete();
            }
            this.resetState();
        } else if (e.key === 'Escape') {
            this.resetState();
        }
    }

    handleFocusOut(): void {
        if (this.state.input) {
            this.dispatchUpdate();
        } else {
            this.dispatchDelete();
        }
        this.resetState();
    }

    handleTyping(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ ...this.state, input: e.target.value });
    }

    startTyping(): void {
        this.setState({
            ...this.state,
            typing: true,
        });
    }

    dispatchUpdate(): void {
        this.props.updateMessage({ id: this.props.id, text: this.state.input });
    }

    dispatchDelete(): void {
        const set: Set<string> = new Set<string>();
        set.add(this.props.id);
        this.props.deleteMessages(set);
    }

    render(): JSX.Element {
        const toggleCheckBox = (
            <input
                type="checkbox"
                className="message-check-box"
                onChange={this.toggleRead}
                checked={this.props.read}
            />
        );
        const updateBox = (
            <input
                autoFocus
                type="text"
                value={this.state.input}
                onKeyUp={this.handleKeyUp}
                onBlur={this.handleFocusOut}
                className="update-Box"
                onChange={this.handleTyping}
            />
        );
        const messageItemLabelClasses = classNames({
            'message-label': true,
            'messages-strikethrough': this.props.read,
        });
        const messageItemLabel = (
            <label onClick={this.startTyping} className={messageItemLabelClasses}>
                {this.props.text}
            </label>
        );
        const deleteButton = (
            <button className="delete-btn" onClick={this.dispatchDelete}>
                x
            </button>
        );
        return (
            <li>
                {toggleCheckBox}
                {this.state.typing ? updateBox : messageItemLabel}
                {deleteButton}
            </li>
        );
    }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(MessageItem);
