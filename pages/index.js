import Header from "../components/globals/Header"
import Rodape from "../components/globals/Rodape"

export default function Home(){ 
    function DescerPagina() {
        window.scrollTo({
          top: 890,
          behavior: "smooth"
        });
    }
    return(
    <>
    <Header/>
    <div className="BackdroundCake">
        <div className="conteiner">
            <h1 className="Text1">DONA <span>LU</span></h1>
            <h1 className="Text2">BOLOS <span>E</span> CHOCOLATES</h1>
            <button className='ButtonAbout'onClick={DescerPagina}>Saiba mais</button>    
        </div>
    </div>
    <div className="MainIndex">
    </div>
    <Rodape/>
    </>
)}
