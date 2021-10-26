import React, { useState } from 'react';
import styled from 'styled-components';

class Chat extends React.Component<any, any> {
    constructor(props:string){ 
        super(props);
        this.state = {
            message: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange = (changeEvent: { target: { value: any; }; }) => {
        this.setState({
          message: changeEvent.target.value
        });
      }; 

    handleFormSubmit = (formSubmitEvent: { preventDefault: () => void; }) => {
        formSubmitEvent.preventDefault();
        console.log('Message sent: ', this.state.message);
      };
    
    ChatStyleContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    color: #FFEDE7;
    font-family: 'Space Mono', monospace;
    flex-grow: 1;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
`;
    render(): JSX.Element {
        return ( 
            <this.ChatStyleContainer>
               <div className="print-message" {...this.state.message}>
                <input type="text" value={this.state.message} className="" onChange={this.handleOnChange} />
                <input type="submit" onClick={this.handleFormSubmit} />
                </div>
            </this.ChatStyleContainer>
        )
    }
}

export default Chat;
