import { Spin } from 'antd';
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import { addMessage, toggleAllMessages } from '../../redux/messageList/actions';
import { Message } from '../../redux/messageList/types';
import { RootState } from '../../redux/store';
import { fetchAndSetMessageList } from '../../util';

interface DispatchProps {
    addMessage: typeof addMessage;
    toggleAllMessages: typeof toggleAllMessages;
}

const mapDispatchToProps: DispatchProps = {
    addMessage,
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

type NewMessageFormProps = DispatchProps & StateProps & OwnProps;

interface NewMessageFormState {
    input: string;
    typing: boolean;
    loading: boolean;
}

const initialState: NewMessageFormState = {
    input: '',
    typing: false,
    loading: false,
};

class NewMessageForm extends React.Component<
    NewMessageFormProps,
    NewMessageFormState
> {
    constructor(props: NewMessageFormProps) {
        super(props);
        this.state = initialState;
        this.clearForm = this.clearForm.bind(this);
        this.createMessage = this.createMessage.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.formRef = React.createRef();
        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    formRef: React.RefObject<HTMLFormElement>;

    clearForm(): void {
        this.setState(initialState);
        if (this.formRef.current) {
            this.formRef.current.reset();
        }
    }

    async createMessage(): Promise<void> {
        this.setState({ loading: true });
        const response = await axios.post('http://localhost:3300/messages', {
            text: this.state.input,
        });
        if (response.status === 201) {
            await fetchAndSetMessageList();
        } else {
            alert('request failed');
        }
        this.setState(initialState);
    }

    toggleAllMessages = async (): Promise<void> => {
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
        await Promise.all(promises);
        await fetchAndSetMessageList();

        this.setState({ loading: false });
    };

    handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            this.props.addMessage(this.state.input);
            this.setState(initialState);
        }
    }

    handleFocus(): void {
        this.setState({ ...this.state, typing: true });
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ ...this.state, input: e.target.value });
    }

    render(): JSX.Element {
        const toggleAllButton = (
            <input
                id="toggle-all-btn"
                type="checkbox"
                onClick={this.toggleAllMessages}
            />
        );
        const newMessageForm = (
            <form id="create-message-form" ref={this.formRef}>
                <input
                    id="create-message-input"
                    type="text"
                    placeholder="Add a new message"
                    onKeyUp={this.handleKeyUp}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    value={this.state.input}
                />
            </form>
        );
        const clearFormButton = (
            <button className="delete-btn" onClick={this.clearForm}>
                x
            </button>
        );
        const createMessageButton = (
            <button id="create-message-btn" onClick={this.createMessage}>
                +
            </button>
        );
        return (
            <Spin spinning={this.state.loading}>
                <React.Fragment>
                    {this.props.messages.length > 0 && toggleAllButton}
                    {newMessageForm}
                    {clearFormButton}
                    {this.state.typing && createMessageButton}
                </React.Fragment>
            </Spin>
        );
    }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(NewMessageForm);
