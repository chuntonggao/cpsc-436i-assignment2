import moment from 'moment';
import React from 'react';

import { Message } from '../../redux/messageList/types';

interface MessageItemDetailsProps extends Omit<Message, 'text' | 'id'> {}

const formatDate = (date: Date): string =>
    moment(date).format('MMMM Do YYYY, h:mm:ss a');

const MessageItemDetails: React.FC<MessageItemDetailsProps> = (
    props: MessageItemDetailsProps
) => {
    const { read, createdOn, readOn, updatedOn } = props;
    return (
        <React.Fragment>
            <li className="message-item-detail-li">
                Created on: &nbsp; {formatDate(createdOn)}
            </li>
            {read && (
                <li className="message-item-detail-li">
                    Read on: &nbsp; {formatDate(readOn as Date)}
                </li>
            )}
            <li className="message-item-detail-li">
                Updated on: &nbsp; {formatDate(updatedOn)}
            </li>
        </React.Fragment>
    );
};

export default MessageItemDetails;
