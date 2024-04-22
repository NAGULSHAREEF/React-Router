import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
    <NavContainer>
        <img src="/src/images/logo.png" alt="logo" />
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </NavContainer>
    </>
    
  )
}

export default Home


const NavContainer = styled.div`
    ul{
        display: flex;
        flex-direction: row;
        gap: 25px;
    }
    li{
        list-style-type: none;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img{
        width: 50px;
        height: 50px;
        border-radius: 10px;
    }
`