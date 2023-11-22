import React from 'react'
import styled from 'styled-components'

const Menu  = styled.header`
    box-shadow: 4px 3px 5px 3px #d8d7d7;
    p{
        font-size: 2rem;
        font-weight: 900;
    }

`
function Header()  {
    return (
        <>
            <Menu className="container-fluid">
                <nav className="navbar bg-body-tertiary">
                    <p>Plataforma de prontuários</p>
                </nav>
            </Menu>

        </>
    );
}

export default Header
