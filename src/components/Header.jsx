import React from 'react'
import Styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Menu = Styled.header`
    box-shadow: 4px 3px 5px 3px #d8d7d7;
    span{
        color: #e983b2;
        font-size: 2rem;
        font-weight: 900;
        &:hover{
            color:#78dbe880;
            transition:  1s;
        }
    }

`

const Logoutbtn = Styled.button`
    background-color: #e983b2;
    font-size: 1.5rem;
    font-weight: 600;
    border: 3px solid #000;
    border-radius: 5px;
    &:active{ 
        background-color: #78dbe880;
        transition:  .5s;
     }
 `;
function Header() {

    const navigate = useNavigate()

    function ClearSession() {
        sessionStorage.clear();
        console.log(sessionStorage)
        navigate('/login')
    }

    return (
        <>
            <Menu className="container-fluid p-0">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 ">MedBase</span>
                        <Logoutbtn className='px-3 ' type="button" onClick={ClearSession}>SAIR</Logoutbtn>
                    </div>
                </nav>
                
            </Menu>

        </>
    );
}

export default Header
