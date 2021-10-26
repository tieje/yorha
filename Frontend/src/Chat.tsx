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
class Chat extends React.Component<any, any> {
    constructor(props:string){ 
        super(props);
        this.state = {
            message: '',
            showMessage: false
        };
        
    }
    handleOnChange = (event: { target: { value: any; }; }) => {
        this.setState({
          message: event.target.value
        });
      }; 

    handleFormSubmit = (formSubmitEvent: { preventDefault: () => void; }) => {
        formSubmitEvent.preventDefault();
        console.log('Message sent: ', this.state.message);
        this.setState({showMessage: true});
      }
      
      displayMessageHandler = (event: {target: {value: any; };}) => {
        let updatedMessage = event.target.value;
        this.setState({ message: updatedMessage });
         
      }

    render(): JSX.Element {
        return ( 
            <ChatStyleContainer>
               <form>
                <input type="text" value={this.state.message} onChange={this.handleOnChange} />
                <input type="submit" onClick={this.handleFormSubmit} />
                {this.state.showMessage && <p>{this.state.message}</p>}
                </form>
            </ChatStyleContainer>
        )
    }
}

export default Chat;