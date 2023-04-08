import Link from 'next/link'

export default function Header(){
    return(
        <header className='HEADER'>
            <div className='Logo'></div>
            <nav className="navigation">
                <Link className="Link"href="/">Home</Link>
                <Link className="Link" href="/about">Sobre</Link>
                <Link className="Link" href="/contact">Contato</Link>
                <Link className="Link" href="/services">Servicos</Link>
                <Link className="ButtonStore" href="/store">Galeria</Link>
            </nav>
        </header>
    )
}