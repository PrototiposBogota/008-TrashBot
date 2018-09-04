import * as React from 'react'
import {Page} from '../widgets/common';
import Chat from './Chat';
import Eventos from './Eventos';

interface IHomeProps{
    page : Page
}

class Home extends React.Component<IHomeProps> {

    public render(){
        return (
            (this.props.page === Page.Eventos)?
            (
                <Eventos/>
            )
            :(this.props.page === Page.Chat) &&(
                <Chat/>
            )
        );
    }
}

export default Home;