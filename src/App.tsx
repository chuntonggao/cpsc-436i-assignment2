import './App.css';

import React from 'react';

import MessageList from './components/MessageList/';
import Tutorial from './components/Tutorial';

interface AppProps {}
interface AppState {
    showTutorial: boolean;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            showTutorial: false,
        };
        this.toggleTutorial = this.toggleTutorial.bind(this);
    }

    toggleTutorial(): void {
        this.setState({
            ...this.state,
            showTutorial: !this.state.showTutorial,
        });
    }
    render(): JSX.Element {
        const toggleTutorialButton = (
            <button id="tutorial-btn" onClick={this.toggleTutorial}>
                ?
            </button>
        );

        const header = (
            <div className="header-div">
                <div className="title-div">
                    <span className="title">
                        <a href="#">Your Messages</a>
                    </span>
                    <span className="author">
                        <a href="https://cgao.info">&nbsp; Chuntong Gao &nbsp;</a>
                    </span>
                    {toggleTutorialButton}
                </div>
            </div>
        );

        return (
            <div className="app-container">
                {header}
                {this.state.showTutorial && <Tutorial />}
                <MessageList />
                <div className="spacer" />
            </div>
        );
    }
}

export default App;
