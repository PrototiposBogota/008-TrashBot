import * as React from 'react'
import '../styles/index.css';
import { ILoginProps } from '../widgets/common';
import Login from './Login';

import Charts from './Charts';

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

                    <section>
                        <h2>¿Qúe sabe TrashBot?</h2>
                        <div>
                            <p>TrashBot conoce las normas vigentes de reciclaje que aplican si estás en tu casa, 
                                oficina o estás en la calle; él te puede responder las dudas que tengas cuando 
                                quieres reciclar algún material, por ejemplo: Quiero reciclar papel en mi casa, 
                                deseo desechar vidrio, deseo desechar plásticos.
                            </p>
                            <p>
                                Además, si no tienes claro que va dentro cada una de las bolsas, puedes recurrir 
                                a él y preguntarle, por ejemplo: ¿Cuáles residuos van en la bolsa blanca? 
                                ¿Qué debo desechar en la bolsa roja?
                            </p>
 
                        </div>
                    </section>

                    <section id="login-form">
                        <h2>Ingresar</h2>
                        <Login login={this.props.login} goToRegister={this.props.goToRegister} />
                    </section>

                    <Charts />

                    <div className="gallery">
                        <div className="gallery-item-one" />
                        <div className="gallery-item-two" />
                        <div className="gallery-item-three" />
                        <div className="gallery-item-four" />
                        <div className="gallery-item-five" />
                        <div className="gallery-item-six" />

                    </div>
                    
                    

                    
                </main>


            </div>
        );
    }
}

export default Index;