import React, { useState } from 'react';
import styled from 'styled-components';

const ChatStyleContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    color: #FFEDE7;
    font-family: 'Space Mono', monospace;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`;

export const Chat = () => {
    const [message, setMessage] = useState('none')

    return (
        <ChatStyleContainer>
            <div className="print-message">
                <div>{message}</div>
                <input type="text"></input>
                <button>Submit</button>
            </div>
        </ChatStyleContainer>
    )
}
