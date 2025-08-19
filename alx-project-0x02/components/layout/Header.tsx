import Link from "next/link"

export default function Header(){
    return (
        <>
        <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/home">Home</Link></li>
        </ul>
        </>
    )
}