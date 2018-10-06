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
                            <p>TrashBot es un Chatbot desarrollado con la Inteligencia Artificial de IBM Watson,
                                que puede ayudarte con la clasificiación de los residuos, para que aprendas a recolectar
                                y disponer eficientemente las basuras. </p>
                            <p>
                                Puedes realizarle preguntas en lenguaje natural y
                                como si una fuera persona responderá a tus inquietudes.
                            </p>
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
                        <h2>¿Qúe sabe o conoce TrashBot?</h2>
                        <div>
                            <h4>TrashBot conoce términos</h4>
                            <p>TrashBot está en capacidad de responder a las preguntas o inquietudes que tengas
                                relacionadas con el reciclaje, como por ejemplo:
                            </p>
                            <ul>
                                <li>¿Qué es reciclaje?</li>
                                <li>¿En qué consiste la recolección?</li>
                                <li>Explícame qué es compostaje</li>
                                <li>Define residuo</li>
                                <li>Entre otras.</li>
                            </ul>
                            <h4>TrashBot sabe cómo desechar los materiales</h4>
                            <p>TrashBot conoce las normas vigentes de reciclaje que aplican si estás en tu casa,
                                oficina o estás en la calle; él te puede responder las dudas que tengas cuando
                                quieres reciclar algún material, por ejemplo:
                            </p>
                            <ul>
                                <li>Quiero reciclar papel en mi casa.</li>
                                <li>Deseo desechar vidrio.</li>
                                <li>Deseo reciclar plásticos.</li>
                                <li>Entre otras.</li>
                            </ul>
                            <p>
                                Además, si no tienes claro como debes separar los materiales en cada una de las bolsas,
                                puedes recurrir a él y preguntarle, por ejemplo:
                            </p>
                            <ul>
                                <li>¿Cuáles residuos van en la bolsa blanca?</li>
                                <li>¿Qué debo desechar en la bolsa roja?</li>
                            </ul>

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