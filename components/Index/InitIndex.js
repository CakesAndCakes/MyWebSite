export default function InitIndex(){
    function DescerPagina() {
        window.scrollTo({
          top: 890,
          behavior: "smooth"
        });
    }
    return(<>
    <div className="BackdroundCake">
        <div className="conteiner">
            <h1 className="Text1">DONA <span>LU</span></h1>
            <h1 className="Text2">BOLOS <span>E</span> CHOCOLATES</h1>
            <button className='ButtonAbout'onClick={DescerPagina}>Saiba mais</button>
            
        </div>
    </div>
    <div className="MainIndex">
    </div>
    </>)
}