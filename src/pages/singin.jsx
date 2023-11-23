import React, { useState } from 'react';
import Styled from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// import { PrivateRoute } from '../routes/privateRoute'

const Formlogin = Styled.div`
    border: 5px solid #e983b2;
    border-radius: 5px;
    background-color: #78dbe880;
    font-weight: 600;
    width: 60%;
    font-size: 2rem;
`;

const Forminput = Styled.input`
    font-size: 2rem;
    border: 2px solid #e983b2;

`;

const Loginbtn = Styled.button`
     background-color: #f2f2f2;
     font-size: 1.5rem;
     font-weight: 600;
     border: none;
 `;



function Login() {

    const [formData, setFormData] = useState({
        "email": "",
        "senha": ""
    })

    const navigate = useNavigate()

    function sendLogin(e) {
        e.preventDefault();
        console.log(formData)
        console.log(sessionStorage)
        let isvalid = true;
        let validationErrors = {}

        if (formData.email === "" || formData.email === null) {
            isvalid = false

        }
        if (formData.senha === "" || formData.senha === null) {
            isvalid = false

        }



        axios.get('https://my-db-lake.vercel.app/accounts')
            .then(result => {
                result.data.map(user => {
                    if (user.email === formData.email && user.senha === formData.senha) {
                        console.log("Login realizado")
                        sessionStorage.setItem('logado', true);
                        navigate('/')
                    }
                    else if (user.email !== formData.email && user.senha !== formData.senha) {
                        alert("senha e email errados")
                    }
                    else if (user.email !== formData.email) {
                        alert("email errado")
                    }
                    else if (user.senha !== formData.senha) {
                        alert("senha errada")
                    }
                })
            })
    }

    return (
        <>
            <main className="container-fluid p-4">
                <section className="row">
                    <div className="d-flex flex-column align-items-center">
                        <p className="align-self-end py-4">Global Solution 2023 - Engenharia de Software</p>
                        <Formlogin>
                            <form onSubmit={sendLogin} className="d-flex flex-column m-lg-5 p-5">
                                <div className="mb-3">
                                    <label forhtml="Username" className="form-label">Usuário</label>
                                    <Forminput
                                        id="email"
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite seu email"
                                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label forhtml="Password" className="form-label">Senha</label>
                                    <Forminput
                                        id="senha"
                                        className="form-control"
                                        type="password"
                                        placeholder="Digite sua senha"
                                        autoComplete='off'
                                        onChange={(event) => setFormData({ ...formData, senha: event.target.value })}
                                    />
                                </div>
                                <div className="align-self-end">
                                    <Loginbtn
                                        type='submit'
                                        className="btn 
                                        ">LOGIN</Loginbtn>
                                </div>
                            </form>
                        </Formlogin>
                    </div>
                </section>
            </main>
        </>

    );

}


export default Login;