import Image from "next/image"
import foto from "../img/foto_perfil.jpg"

export const Dir = () =>{
    return(
        <div className="direita">
            <div className="foto_perfil">
            <Image src={foto}></Image>
            </div>
            <div className="sobre">
                <text id="titleSobre">Sobre Mim</text>
                <div className="texto-sobre">Eu sou uma pessoa que gosto de ter muito conhecimento, 
                a área em que escolhi para minha vida é a da tecnologia, desde criança fui muito 
                curioso sobre como um computador funcionava e hoje tenho a certeza que é isso o 
                meu desejo de profissão e futuro. Ademais, possuo experiência em manutenção de 
                computadores, desde seu processo de montagem até de configuração, as demais áreas 
                de uma máquina e pretendo me tornar um programador.</div>
            </div>
            <div className="detalhes">
                <text>Detalhes pessoais</text>
                <ul> Data de Nascimento
                    <li>27/06/2005</li>
                </ul>
                <ul> Nacionalidade
                    <li>Brasileiro</li>
                </ul>
                <ul> Estado Civil
                    <li>Solteiro</li>
                </ul>
            </div>
            <div className="recomendacao"> 
                <text>Recomendação</text>
                    <div>
                        <i class="fa-brands fa-whatsapp"></i>
                            <text>(67) 99668-9241</text>
                            <br></br>
                            <text>Jonison</text>
                    </div>
            </div>
            <div className="idioma"> 
                <text>Idiomas</text>
                    <div>
                        <ul>
                            <li>Português</li>
                            <li>Inglês</li>
                            <li>Espanhol</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}