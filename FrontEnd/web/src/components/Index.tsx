import * as React from 'react'
import '../styles/index.css';
import { ILoginProps } from '../widgets/common';
import Login from './Login';

class Index extends React.Component<ILoginProps> {

    public render() {
        return (
            <div className="container">

                <div id="section-header">
                    <div className="head">
                        <h1>TrashBot</h1>
                        <div id="description">
                            <p>Chat inteligente <strong>24/7</strong>, que puede ayudarte con la clasificiación de los residuos,</p>
                            <div><a className="contact" href="#login-form">Pregúntame y recicla mejor.</a></div>
                        </div>
                    </div>
                </div>

                <main>


                    <section className="intro">
                        <h2>Recicla de forma correcta</h2>
                        <div>
                            <p>Con TrashBot puedes realizar una mejor clasificiación de residuos. Te puede orientar en las canecas o papeleras de acuerdo al ártículo o elemento que deseas desechar, unicamente escríbele y pregúntale donde desecharlo.</p>
                        </div>
                    </section>

                    <div>
                        <div className="services">
                            <div className="service-one">
                                <p className="service-icon">
                                    <i className="fas fa-brain icon" />
                                    IA
                                </p>
                                <p>Inteligencia Artifical para dar detectar tus preguntas y darte la mejor solución para el desecho y reciclaje de productos que consideres inservibles.</p>
                            </div>
                            <div className="service-two">
                                <p className="service-icon">
                                    <i className="far fa-calendar-alt icon" />
                                    24/7
                                </p>
                                <p>TrashBot no duerme!</p>
                                <p>Puedes preguntarle a TrashBot todos los días de la semana y en la hora que prefieras.</p>

                            </div>
                            <div className="service-three">
                                <p className="service-icon">
                                    <i className="fas fa-code icon" />
                                    Glosario
                                </p>
                                <p>Si desconoces de algúnos términos relacionados con el reciclaje,
                                    TrashBot puede darte una definición de acuerdo a la normatividad vigente.
                                </p>

                            </div>
                        </div>

                    </div>



                    <div className="gallery">
                        <div className="gallery-item-one" />
                        <div className="gallery-item-two" />
                        <div className="gallery-item-three" />
                        <div className="gallery-item-four" />
                        <div className="gallery-item-five" />
                        <div className="gallery-item-six" />

                    </div>

                    <section>
                        <h2>Our Mission</h2>
                        <div>
                            <p>Integer sit amet venenatis erat. Cras elementum tortor odio, sit amet euismod nunc cursus ut. Donec sollicitudin orci sed enim volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar sit amet dignissim in, consectetur eget nulla. Etiam ac turpis augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna. Nulla dapibus convallis luctus. </p>
                            <p>Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem fringilla, tincidunt nisi non, congue libero. Etiam cursus nulla quis sapien varius, eget accumsan augue mattis. Cras accumsan sapien nulla, eu eleifend odio tempus sit amet. Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque eget. Aliquam eleifend velit vel libero elementum, vitae consectetur nisl sollicitudin. Suspendisse volutpat fringilla vehicula.</p>
                        </div>
                    </section>

                    <section id="login-form">
                        <h2>Ingresar</h2>
                        <Login login={this.props.login} />
                    </section>
                </main>


            </div>
        );
    }
}

export default Index;