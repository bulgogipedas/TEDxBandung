import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
    return (
        <header className="header font-plus-jakarta-sans">
            <div className="flex items-center justify-between w-full">
                <Link href="/">
                    <Image
                        src="/logo/logo-white.svg"
                        alt="Site Logo"
                        width={200}
                        height={200}
                        loading="lazy"
                    />
                </Link>
                <Navbar />
                <div className="space-x-5 flex items-center">
                    <button className="btn btn-base-white">
                        <Link href="/auth/login">
                            IG
                        </Link>
                    </button>
                    <button className="btn btn-base-white">
                        <Link href="/auth/login">M</Link>
                    </button>
                    <button className="btn btn-base-white">
                        <Link href="mailto:test@example.com">M</Link>
                    </button>
                </div>
            </div>
        </header>
    )
}
