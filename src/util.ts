import axios from 'axios';

import { initMessageList } from './redux/messageList/actions';
import { Message } from './redux/messageList/types';
import { store } from './redux/store';

export const fetchAndSetMessageList = async (): Promise<void> => {
    console.log(process.env.REACT_APP_API_URL);
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/messages`);
    if (response.status === 200) {
        const messages: Array<Omit<Message, 'id'> & { _id: Message['id'] }> =
            response.data.messageList;
        store.dispatch(initMessageList(messages));
    } else {
        alert('request failed');
    }
};
