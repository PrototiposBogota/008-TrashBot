import * as React from 'react';
import '../styles/chat.css';
import {Message} from '../widgets/common';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import ChatIcon from '@material-ui/icons/Chat';

import {API} from '../service/backend';


class Chat extends React.Component{
    
    public state = {
        message : '',
        messages: new Array<Message>()
    }

    /**
     *
     */
    constructor(props) {
        super(props);
        
        this.state.messages = [
            // new Message({content: 'Hola Mundo', self: false, cssClass: '', isTrash: false}),
            // new Message({content: '', self: false, cssClass: 'p_blanca',  isTrash: true}),
        ]
    }

    public render(){
        return (
            <div >
                <List className="chat-list">

                    {
                        this.state.messages.map((item, index)=>
                        (
                            <Card key={index.toString()} className={'chat-card ' + (item.self ? 'ask' : 'response')}>
                                <CardContent className={'CardContent ' + (item.self ? 'verde' : 'azul_claro')}>
                                    { !item.isTrash && 
                                        (<p className={item.self ? 'right' : 'left'}>
                                            {item.content}
                                        </p>)
                                    }
                                    { !item.self && item.isTrash &&
                                        (
                                            <div className={'papelera ' + item.cssClass} />
                                        )
                                    }
                                </CardContent>
                            </Card>
                        ))
                    }
                </List>
                <div className="chat-footer-container">
                    <ChatIcon />
                    <TextField
                        id="name"
                        label="Escribe una pregunta sobre reciclaje"
                        className="chat-input"
                        value={this.state.message}
                        onChange={this.messageChange}
                        onKeyPress={this.hadleKeyPress}
                        margin="normal"
                    />
                </div>
            </div>

        );
    }

    private messageChange = event => {
        this.setState({
            message: event.target.value
        });
    }

    

    private hadleKeyPress = event => {
        if (event.key === 'Enter') {

            const msj = new Message();
            msj.content =  event.target.value;;
            this.updateMessages([new Message(msj)]);

            const messages = Array<Message>();

            this.askToTrashBot(msj.content)
            .then((texts:string[]) =>{
                texts.forEach(item=>{
                    const resp = new Message({content: item, self: false, cssClass: '', isTrash: false});

                    if(item.match(/^p_.*jpg$/)){
                        resp.isTrash = true;
                        resp.cssClass = item.replace(/(.*).jpg/, "$1");
                        resp.content = '';
                    }

                    messages.push(resp);
                });
                this.updateMessages(messages);
            });

            event.preventDefault();
          }
    }

    private updateMessages(msj: Message[]){
        const newMessages = this.state.messages;
        newMessages.push(...msj);

        this.setState({
            message: '',
            messages: newMessages
        });
    }

    private askToTrashBot(text : string){

        return API.sendMessage(text);
    }

}

export default Chat;