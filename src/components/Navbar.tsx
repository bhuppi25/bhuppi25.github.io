import { Link } from "react-scroll";

export default function Navbar() {
    const items = [
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Contact",
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                <h1 className="text-xl font-bold text-blue-500">
                    BS
                </h1>

                <div className="flex gap-6">
                    {items.map((item) => (
                        <Link
                            key={item}
                            to={item}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-blue-400"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}