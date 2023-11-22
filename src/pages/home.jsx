import React from 'react';
import Header from '../components/Header';
import Styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// img
import Phone from '../assets/img/phone.svg'

const Introducao = Styled.div`
    h1{
        font-size: 2.5rem;
        font-weight: 800;
    }

    p {
        font-size: 1.5rem;
    }


`;

const BtnMais = Styled.button`
    font-size: 1.5rem;
    font-weight: 600;
    border: 4px solid #e983b2;
    background-color: #78dbe880;

    a {
        text-decoration: none;
        color: #000;
    }

`;

const Solucao = Styled.div`
    border: 2px solid #e983b2;
    h3 {
        font-size: 2rem;
        font-weight: 600;
    }
    
    p {
        font-size: 1.5rem;
    }
`;

const Oqsolucao = Styled.div`
    border-bottom: 2px solid #e983b2;
`;

const Oqfaz = Styled.div`
    border-bottom: 2px solid #e983b2;
`;
const Comofunciona = Styled.div`
    
`;

const Vantagens = Styled.div`
    .galeria {
            margin: auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(100px);
            grid-template-areas:
                "area1 area2 area3 area4"
                "area1 area2 area3 area4"
                "area1 area2 area3 area4"
            ;

            .area1 {
                grid-area: area1;

                img {
                    height: 80%;
                    width: 80%;
                }
            }

            .area2 {
                grid-area: area2;

                img {
                    height: 80%;
                    width: 80%;
                }
            }

            .area3 {
                grid-area: area3;

                img {
                    height: 80%;
                    width: 80%;
                }
            }

            .area4 {
                grid-area: area4;

                img {
                    height: 80%;
                    width: 80%;
                }
            }
        }

        
@media(max-width: 768px) {
    body {
        .vantagens {
            .galeria {
                gap: 5px;
                grid-template-columns: repeat(2, 1fr);
                grid-auto-rows: minmax(100px);
                grid-template-areas:
                    "area1 area2"
                    "area1 area2"
                    "area3 area4"
                    "area3 area4"
                ;

            }
        }
    }
}
@media(max-width: 576px) {
    body {
        .vantagens {
            .galeria {
                gap: 5px;
                grid-template-columns: repeat(1, 1fr);
                grid-auto-rows: minmax(100px);
                grid-template-areas:
                    "area1"
                    "area2"
                    "area3"
                    "area4"
                ;

            }
        }
    }
}
`

function Home() {
    const navigate = useNavigate()

    function ClearSession() {
        sessionStorage.clear();
        console.log(sessionStorage)
        navigate('/login')
    }

    return (
        <>
            <Header></Header>
            <main className="container-fluid py-4">
                <section className="row">
                    <Introducao className=" col-12 col-lg-6 col-xl-8 d-flex flex-column">
                        <figure className="p-3">
                            <img className="img-fluid" src={Phone} alt="" />
                        </figure>
                        <div className="row">
                            <h1 className="p-3 text-center col-12 col-xl-4">Plataforma de prontuários</h1>
                            <p className="p-3 col-12 col-xl-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                tenetur ex
                                ipsum illo quibusdam
                                deserunt eum vero dolores, maiores cupiditate cumque voluptatibus consectetur, nostrum
                                temporibus, quos quasi qui optio quae.</p>
                        </div>
                        <BtnMais className=" btn mb-4 mb-lg-0 align-self-end">
                            <a href="">Mais Informações</a>
                        </BtnMais>
                    </Introducao>
                    <Solucao className=" col-12 col-lg-6 col-xl-4 d-flex flex-column  justify-content-between">
                        <Oqsolucao className=" p-1 m-3">
                            <h2>
                                O que é a solução
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore provident, consectetur nam
                                quidem exercitationem ducimus aliquam ratione corporis deleniti?
                            </p>
                        </Oqsolucao>
                        <Oqfaz className=" p-1 m-3">
                            <h2>
                                O que ela fará
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore provident, consectetur nam
                                quidem exercitationem ducimus aliquam ratione corporis deleniti?
                            </p>
                        </Oqfaz>
                        <Comofunciona className=" p-1 m-3">
                            <h2>
                                Como funcionará
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore provident, consectetur nam
                                quidem exercitationem ducimus aliquam ratione corporis deleniti?
                            </p>
                        </Comofunciona>
                    </Solucao>
                </section>
            </main>


            <Vantagens className=" container-fluid" id="benefits">
                <div className="galeria">
                    <div className="area1 row">
                        <div className="col-6">
                            <img className="img-fluid" src={Phone} alt="" />
                        </div>

                        <div className="col-6">
                            <h2>01</h2>
                            <h3>Lorem.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, impedit?</p>
                        </div>

                    </div>
                    <div className="area2 row">
                        <div className="col-6">
                            <img className="img-fluid" src={Phone} alt="" />
                        </div>

                        <div className="col-6">
                            <h2>02</h2>
                            <h3>Lorem.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, impedit?</p>
                        </div>

                    </div>
                    <div className="area3 row">
                        <div className="col-6">
                            <img className="img-fluid" src={Phone} alt="" />
                        </div>

                        <div className="col-6">
                            <h2>03</h2>
                            <h3>Lorem.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, impedit?</p>
                        </div>

                    </div>
                    <div className="area4 row">
                        <div className="col-6">
                            <img className="img-fluid" src={Phone} alt="" />
                        </div>

                        <div className="col-6">
                            <h2>04</h2>
                            <h3>Lorem.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, impedit?</p>
                        </div>

                    </div>
                </div>
            </Vantagens>
            <button type="button" onClick={ClearSession}>Logout</button>
        </>



    );
}

export default Home;
