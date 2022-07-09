import React, { Fragment } from 'react'
import "./Dicas.css"
import Culturais from "../../assets/Images/dicasculturais.png"
import Seguranca from "../../assets/Images/dicasseguranca.png"
import Contatos from "../../assets/Images/dicascontatos.png"
import Planejamento from "../../assets/Images/dicasplaneja.png"
import { Link } from 'react-router-dom'
import Seta from "../../assets/Images/chevron-down.svg"


function Dicas() {
    return (
        <Fragment>
            <div className='containerDicas' id='dicas'>

                <div className='containerTextoDicas'>
                    <div>
                        <h1>Dicas</h1>
                    </div>
                    <div>
                        <h2>Para cada região do Brasil</h2>
                    </div>
                </div>

                <div className='containerModuloUm'>
                    <div className='conteudoModuloUm'>
                        <div className='culturais'>
                            <a href="./culturais"><img id="efeitoDicas" src={Culturais} alt="Imagem Dicas Culturais" /></a>

                        </div>
                        <div>

                            <a href="./seguranca"><img id="efeitoDicas" src={Seguranca} alt="Imagem Dicas Seguranca" /></a>

                        </div>
                    </div>
                </div>
                <div className='containerModuloUm'>
                    <div className='conteudoModuloUm'>
                        <div className='uteis'>
                            <a href='./uteis'><img id="efeitoDicas" src={Contatos} alt="Imagem Dicas Contatos" /></a>
                        </div>
                        <div>
                            <a href="planejamento">   <img id="efeitoDicas" src={Planejamento} alt="Imagem Dicas Planejamento" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dicas