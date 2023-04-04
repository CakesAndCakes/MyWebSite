import Link from 'next/link'


export default function Header(){
    return(
        <header className='HEADER'>
            <h2 className='logo'>Logo</h2>
            <nav className="navigation">
                <Link className="Link"href="/">Home</Link>
                <Link className="Link" href="/about">About</Link>
                <Link className="Link" href="/contact">Contact</Link>
                <a className="Link" href="/services">None</a>
                <Link className="ButtonStore" href="/store">Store</Link>
            </nav>
        </header>
    )
}