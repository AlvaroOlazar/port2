"use client"

import Image from "next/image"
import foto from "../img/foto_perfil.jpg"
import html from "../img/html.png"
import css from "../img/css.png"
import js from "../img/js.png"
import react from "../img/react.png"
import c from "../img/c.png"
import mongodb from "../img/mongodb.png"
import mysql from "../img/mysql.png"
import next from "../img/nextjs.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import Modal from "../component/modal"
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons"
import { useStepContext } from "@mui/material"

export const Esq = () =>{

    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
    const [openModal3, setOpenModal3] = useState(false)
    const [openModal4, setOpenModal4] = useState(false)
    const [openModal5, setOpenModal5] = useState(false)
    const [openModal6, setOpenModal6] = useState(false)
    const [openModal7, setOpenModal7] = useState(false)
    const [openModal8, setOpenModal8] = useState(false)
    const [nextModal, setNextModal] = useState(false)
    const [backModal, setBackModal] = useState(false)

    if(setBackModal){
        
    }

    return(
        <nav className="esquerda">
            <section className="nav">
            <div className="nome-e-funcao">
                <text className="nome">Alvaro da Silva Olazar</text>
                <br></br>
                <text className="funcao">Web Development</text>
            </div>
            <div className="redes">
                <ul>
                    <li><FontAwesomeIcon style={{width:"30px", height:"30px"}}icon={faGithub}/><text>AlvaroOlazar</text></li>
                    <li><FontAwesomeIcon style={{width:"30px", height:"30px"}}icon={faInstagram}/><text>olazar87</text></li>
                    <li><FontAwesomeIcon style={{width:"30px", height:"30px"}}icon={faWhatsapp}/><text>(67) 99668-9241</text></li>
                </ul>
            </div>
            </section>
            <text className="titulo">Formação Acadêmica</text>
            <section className="formacao">
                <div class="card" style={{width: "18rem"}}>
                    <Image src={foto} className="card-img-top" alt="..." style={{width:"100%", height:"250px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">1ºGrau</h5>
                        <p className="card-text">O Ensino Fundamental, também conhecido como 1º grau.</p>
                        <button onClick={() => setOpenModal(true)} className="btn btn-primary">Mais informações</button>
                    </div>
                        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                            <div style={{position:"relative", left:"560px", top:"-5px", fontSize:"20px", fontWeight: "bold", border:"none"}} onClick={() => setOpenModal(false)} className="btn">x</div>
                            <div className="info">
                            Instituição: Escola Estadual Presidente Vargas
                            <br></br>
                            Período: 2017 a 2019
                            <br></br>
                            Cidade: Dourados/MS                    
                            </div>
                        </Modal>
                </div>
                <div class="card" style={{width: "18rem"}}>
                    <Image src={foto} className="card-img-top" alt="..." style={{width:"100%", height:"250px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">2ºGrau</h5>
                        <p className="card-text">O Ensino Médio, também conhecido como 2º grau.</p>
                        <button onClick={() => setOpenModal2(true)} className="btn btn-primary">Mais informações</button>
                    </div>
                    <Modal isOpen2={openModal2} setModalOpen2={() => setOpenModal2(!openModal2)}>
                            <div style={{position:"relative", left:"560px", top:"-5px", fontSize:"20px", fontWeight: "bold", border:"none"}} onClick={() => setOpenModal2(false)} className="btn">x</div>
                            <div className="info">
                            Instituição: Instituto Federal do Mato Grosso do Sul - IFMS
                            <br></br>
                            Período: 2020 a 2022
                            <br></br>
                            Cidade: Dourados/MS                    
                            </div>
                        </Modal>
                </div>
                <div class="card" style={{width: "18rem"}}>
                    <Image src={foto} className="card-img-top" alt="..." style={{width:"100%", height:"250px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">3ºGrau</h5>
                        <p className="card-text">O Ensino Superior, também conhecido como 3º grau.</p>
                        <button onClick={() => setOpenModal3(true)} className="btn btn-primary">Mais informações</button>
                    </div>
                    <Modal isOpen3={openModal3} setModalOpen3={() => setOpenModal3(!openModal3)}>
                            <div style={{position:"relative", left:"560px", top:"-5px", fontSize:"20px", fontWeight: "bold", border:"none"}} onClick={() => setOpenModal3(false)} className="btn">x</div>
                            <div className="info">
                            Instituição: Universidade Federal da Grande Dourados - UFGD
                            <br></br>
                            Período: 2023 - cursando
                            <br></br>
                            Cidade: Dourados/MS              
                            </div>
                        </Modal>
                </div>
                <div class="card" style={{width: "18rem"}}>
                    <Image src={foto} className="card-img-top" alt="..." style={{width:"100%", height:"250px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Curso Técnico</h5>
                        <p className="card-text">Curso Técnico na área de programação para web.</p>
                        <button onClick={() => setOpenModal4(true)} className="btn btn-primary">Mais informações</button>
                    </div>
                    <Modal isOpen4={openModal4} setModalOpen4={() => setOpenModal4(!openModal4)}>
                            <div style={{position:"relative", left:"560px", top:"-5px", fontSize:"20px", fontWeight: "bold", border:"none"}} onClick={() => setOpenModal4(false)} className="btn">x</div>
                            <div className="info">
                            Instituição: Instituto Federal do Mato Grosso do Sul - IFMS
                            <br></br>
                            Curso: Técnico de Informática para Internet
                            <br></br>
                            Período: 2020 a 2022
                            <br></br>
                            Cidade: Dourados/MS                    
                            </div>
                        </Modal>
                </div>
            </section>
            <text className="titulo">Cursos</text>
            <section className="curso">
                <div className="seta" onClick={() => setBackModal(true)}><FontAwesomeIcon icon={faArrowAltCircleDown} rotation={90}/></div>
                <div class="card" style={{width: "25rem"}}>
                    <Image src={foto} className="card-img-top" alt="..." style={{width:"100%", height:"120px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Curso de Capacitação e Aperfeiçoamento Profissional em Informática Básica</h5>
                        <p className="card-text"></p>
                        <button onClick={() => setOpenModal5(true)} className="btn btn-primary">Mais informações</button>
                     </div>
                     <Modal isOpen5={openModal5} setModalOpen5={() => setOpenModal5(!openModal5)}>
                            <div style={{position:"relative", left:"560px", top:"-5px", fontSize:"20px", fontWeight: "bold", border:"none"}} onClick={() => setOpenModal5(false)} className="btn">x</div>
                            <div className="info">
                            Instituição: Instituto Federal do Mato Grosso do Sul - IFMS 
                            <br></br>
                            Período: 04 de outubro de 2021 a 21 de dezembro de 2021
                            <br></br>
                            Carga Horária: 60 horas                     
                            </div>
                        </Modal>
                    </div>
                <div class="card" style={{width: "25rem"}}>
                    <Image src={foto} className="card-img-top" alt="..." style={{width:"100%", height:"120px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Curso de Capacitação e Aperfeiçoamento Profissional em Marketing Digital</h5>
                        <p className="card-text"></p>
                        <button onClick={() => setOpenModal6(true)} className="btn btn-primary">Mais informações</button>
                    </div>
                    <Modal isOpen6={openModal6} setModalOpen6={() => setOpenModal6(!openModal6)}>
                            <div style={{position:"relative", left:"560px", top:"-5px", fontSize:"20px", fontWeight: "bold", border:"none"}} onClick={() => setOpenModal6(false)} className="btn">x</div>
                            <div className="info">
                            Instituição: Instituto Federal do Mato Grosso do Sul - IFMS 
                            <br></br>
                            Período: 04 de outubro de 2021 a 21 de dezembro de 2021
                            <br></br>
                            Carga Horária: 60 horas                     
                            </div>
                        </Modal>
                </div>
                <div class="card" style={{width: "25rem"}}>
                    <Image src={foto} className="card-img-top" alt="..." style={{width:"100%", height:"120px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Curso de Capacitação e Aperfeiçoamento Profissional em Manutenção e Montagem de Microcomputadores </h5>
                        <p className="card-text"></p>
                        <button onClick={() => setOpenModal7(true)} className="btn btn-primary">Mais informações</button>
                    </div>
                    <Modal isOpen7={openModal7} setModalOpen7={() => setOpenModal7(!openModal7)}>
                            <div style={{position:"relative", left:"560px", top:"-5px", fontSize:"20px", fontWeight: "bold", border:"none"}} onClick={() => setOpenModal7(false)} className="btn">x</div>
                            <div className="info">
                            Instituição: Instituto Federal do Mato Grosso do Sul - IFMS 
                            <br></br>
                            Período: 19 de abril de 2022 a 13 de junho de 2022 
                            <br></br>
                            Carga Horária: 60 horas                     
                            </div>
                        </Modal>
                </div>
                <div className="seta" onClick={() => setNextModal(true)}><FontAwesomeIcon icon={faArrowAltCircleDown} rotation={270}/></div>
                <div class="card" style={{width: "25rem"}}>
                    <Image src={foto} className="card-img-top" alt="..." style={{width:"100%", height:"120px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Curso de Capacitação e Aperfeiçoamento Profissional em Robótica Móvel</h5>
                        <p className="card-text"></p>
                        <button onClick={() => setOpenModal8(true)} className="btn btn-primary">Mais informações</button>
                    </div>
                    <Modal isOpen8={openModal8} setModalOpen8={() => setOpenModal8(!openModal8)}>
                            <div style={{position:"relative", left:"560px", top:"-5px", fontSize:"20px", fontWeight: "bold", border:"none"}} onClick={() => setOpenModal8(false)} className="btn">x</div>
                            <div className="info">
                            Instituição: Instituto Federal do Mato Grosso do Sul - IFMS 
                            <br></br>
                            Período: 19 de abril de 2022 a 13 de junho de 2022 
                            <br></br>
                            Carga Horária: 60 horas                     
                            </div>
                        </Modal>
                </div>
            </section>
            <text className="titulo">Linguagens</text>
            <section className="linguagens">
                <div className="card" style={{width: "100%", margin:"20px"}}>
                    <div className="card-body" style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
                        <Image src={html} style={{width:"70px", height:"70px", marginLeft:"15px"}}/>  
                        <Image src={css} style={{width:"70px", height:"70px", marginLeft:"15px"}}/>  
                        <Image src={js} style={{width:"70px", height:"60px", marginLeft:"15px"}}/>  
                        <Image src={react} style={{width:"70px", height:"70px", marginLeft:"15px"}}/>  
                        <Image src={next} style={{width:"150px", height:"40px", marginLeft:"15px"}}/>                   
                        <Image src={c} style={{width:"50px", height:"50px", marginLeft:"15px"}}/>                   
                        <Image src={mongodb} style={{width:"150px", height:"50px", marginLeft:"15px"}}/>                   
                        <Image src={mysql} style={{width:"120px", height:"50px", marginLeft:"15px"}}/>            
                    </div>
                </div>
            </section>
        </nav>
    )
}