import Link from "next/link";


export default function Header() {
    return(
        <header className="m-0 p-0 ">
            <nav className='flex justify-around items-center h-24 '>
                <div className="left drop-shadow-md">My PortFolio</div>
                <div className="right">
                    <ul>
                        <li ><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/contact'}>Contact Me</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}