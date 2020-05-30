/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Tutorial: React.FC = () => (
    <div className="tutorial-div">
        <h2>Track your messages</h2>
        <div className="feature-div">
            <span className="feature-title">1-ADD</span>
            <div className="feature-text">
                Add a new message by pressing the enter key or tap the '+' button.
            </div>
        </div>
        <div className="feature-div">
            <span className="feature-title">2-SEE</span>
            <div className="feature-text">
                You'll see it right after you add a message. Your latest message will
                appear first on the list.
            </div>
        </div>
        <div className="feature-div">
            <span className="feature-title">3-CHECK</span>
            <div className="feature-text">
                Check off what you've read with the dark blue checkbox next to your
                message. Mark all your messages as read with the dark blue check
                button.
            </div>
        </div>
        <div className="feature-div">
            <span className="feature-title">4-CHANGE</span>
            <div className="feature-text">
                Make changes by tapping on your message. Save it by pressing the
                enter key or tapping outside of the box. Cancel your change by
                pressing escape key on your keyword.
            </div>
        </div>
        <div className="feature-div">
            <span className="feature-title">5-DELETE</span>
            <div className="feature-text">
                Delete your message by tapping the 'x' button next to your message.
                Delete all messages by tapping the 'x' button on the top.
            </div>
        </div>
    </div>
);

export default Tutorial;
