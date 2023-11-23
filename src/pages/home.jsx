import React from 'react';
import Header from '../components/Header';
import Styled from 'styled-components';

import axios from "axios";

// img
import Star from '../assets/img/star-fill.svg'
import Basedata from '../assets/img/pexels-manuel-geissinger-325229.jpg'

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
    h2 {
        font-size: 1.7rem;
        font-weight: 600;
    }
    
    p {
        font-size: 1.3rem;
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

const EmailNome = Styled.p`
    font-size: 1.3rem;
    font-weight: 800;
`

const Vantagens = Styled.div`
    .galeria {
            margin: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
                grid-auto-rows: minmax(100px);
                grid-template-areas:
                    "area1 area2"
                    "area1 area2"
                    "area3 area4"
                    "area3 area4"
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

    axios.get('https://my-db-lake.vercel.app/accounts')
        .then(result => {
            result.data.map(user => {
                const textuser = document.querySelector('#name-email')
                textuser.innerHTML = "Seja bem vindo " + user.nome + "!" + " Seu email é: " + user.email
            })
        })

    return (
        <>
            <Header></Header>
            <main className="container-fluid py-4">
                <section className="row">
                    <EmailNome id="name-email" ></EmailNome>
                    <Introducao className=" col-12 col-lg-6 col-xl-8 d-flex flex-column">
                        <figure className="p-3">
                            <img className="img-fluid" src={Basedata} alt="" />
                        </figure>
                        <div className="row">
                            <h1 className="p-3 text-center col-12 col-xl-4">MedBase</h1>
                            <p className="p-3 col-12 col-xl-8">O projeto MedBase, tem como objetivo proporcionar uma solução eficiente para o armazenamento e gerenciamento dos dados de pacientes, os unificando dentro de nossa plataforma.</p>
                        </div>
                    </Introducao>
                    <Solucao className=" col-12 col-lg-6 col-xl-4 d-flex flex-column  justify-content-around">
                        <Oqsolucao className=" p-1 m-3">
                            <h2>
                                O que é a solução
                            </h2>
                            <p>
                                Uma plataforma de dados do medicos do paciente para uso de proficionais da saúde ou para uso do proprio paciente.
                            </p>
                        </Oqsolucao>
                        <Oqfaz className=" p-1 m-3">
                            <h2>
                                O que ela fará
                            </h2>
                            <p>
                                Centralizará os dados dos pacientes e possbilitará o gerenciamento deles pelos profissonais da saúde responsaveis, permitindo o registro, edição, adição e remoção de informações, além de facilitar a visualização dos históricos médicos dos pacientes.
                            </p>
                        </Oqfaz>
                        <Comofunciona className=" p-1 m-3">
                            <h2>
                                Como funcionará
                            </h2>
                            <p>
                                Através do uso de um banco de dados em formato JSON. O intuito é oferecer um banco centralizado de prontuários, históricos médicos e exames do paciente. Deste modo, o paciente não é limitado por sua rede e, em casos de mudanças ou até mesmo de uma emergência infortúnia, será muito mais fácil encontrar informações vitalmente importantes através apenas do CPF do paciente.

                            </p>
                        </Comofunciona>
                    </Solucao>
                </section>
            </main>


            <Vantagens className=" container-fluid" id="benefits">
                <h2>Vantagens</h2>
                <div className="galeria">
                    <div className="area1 row">
                        <div className="col-6">
                            <img className="img-fluid" src={Star} alt="" />
                        </div>

                        <div className="col-6">
                            <h2>01</h2>
                            <h3>Facil Utilização</h3>
                            <p>É apenas necessario o CPF de seu paciente para ter acesso aos dados disponiveis.</p>
                        </div>

                    </div>
                    <div className="area2 row">
                        <div className="col-6">
                            <img className="img-fluid" src={Star} alt="" />
                        </div>

                        <div className="col-6">
                            <h2>02</h2>
                            <h3>Informação Recentes</h3>
                            <p>As informação dos clientes não ficaram desatualizadas, através do MedBase dados serão atualizados pelos médicos de maneira simples, podendo remover, adicionar ou modificar.</p>
                        </div>

                    </div>
                    <div className="area3 row">
                        <div className="col-6">
                            <img className="img-fluid" src={Star} alt="" />
                        </div>

                        <div className="col-6">
                            <h2>03</h2>
                            <h3>Fácil Visualização</h3>
                            <p>Exibe uma lista com informações resumidas de todos os pacientes registrados no sistema.</p>
                        </div>

                    </div>
                    <div className="area4 row">
                        <div className="col-6">
                            <img className="img-fluid" src={Star} alt="" />
                        </div>

                        <div className="col-6">
                            <h2>04</h2>
                            <h3>Registro Simples</h3>
                            <p>Permite adicionar um novo paciente ao sistema, fornecendo informações como nome, idade, endereço, tipo sanguíneo, CPF, entre outros.
                            </p>
                        </div>

                    </div>
                </div>
            </Vantagens>

        </>



    );
}

export default Home;
