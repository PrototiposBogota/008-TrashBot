import * as React from 'react'
import {IHomeProps, Page} from '../widgets/common';
import Chat from './Chat';
import Eventos from './Eventos';
import Register from './Register';

class Home extends React.Component<IHomeProps> {

    public render(){
        return (
            (this.props.page === Page.Eventos) ?    <Eventos/>
            :(this.props.page === Page.Chat) ?      <Chat/>
            :(this.props.page === Page.Register) && <Register register={this.props.register}/>
        );
    }
}

export default Home;