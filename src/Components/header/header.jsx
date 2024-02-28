import React from "react"
import "./header.css"
function Header() {
    return (
        <header>
          
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/800px-Disney%2B_logo.svg.png" alt="Logo da Disney+" />

            <h1> Os segredos da fantasia</h1>
            <h2> Histórias de curiosidades da Disney toda semana</h2>

            <div>
                <h2>Curiosidades sobre as histórias e/ou criação de:</h2>
                <ul>
                    <li>Serviços</li>
                    <li>Atrações</li>
                    <li>Hotéis</li>
                    <li>Personalidades Notáveis</li>
                </ul>
            </div>


        </header>
    )
}

export default Header