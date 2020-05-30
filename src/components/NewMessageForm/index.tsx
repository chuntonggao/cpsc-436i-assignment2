import React from 'react';
import { connect } from 'react-redux';

import { addMessage, toggleAllMessages } from '../../redux/messageList/actions';
import { RootState } from '../../redux/store';

interface DispatchProps {
    addMessage: typeof addMessage;
    toggleAllMessages: typeof toggleAllMessages;
}

const mapDispatchToProps: DispatchProps = {
    addMessage,
    toggleAllMessages,
};

interface StateProps {}

const mapStateToProps = null;

interface OwnProps {}

type NewMessageFormProps = DispatchProps & StateProps & OwnProps;

interface NewMessageFormState {
    input: string;
    typing: boolean;
}

const initialState: NewMessageFormState = {
    input: '',
    typing: false,
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

    createMessage(): void {
        this.props.addMessage(this.state.input);
        this.setState(initialState);
    }

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
                onClick={this.props.toggleAllMessages}
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
            <React.Fragment>
                {toggleAllButton}
                {newMessageForm}
                {clearFormButton}
                {this.state.typing && createMessageButton}
            </React.Fragment>
        );
    }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(NewMessageForm);
