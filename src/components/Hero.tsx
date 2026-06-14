import { portfolio } from "../data/portfolio";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center"
        >
            <div className="max-w-5xl mx-auto px-6">

                <h1 className="text-6xl font-bold">
                    {portfolio.name}
                </h1>

                <h2 className="text-2xl mt-4">
                    {portfolio.title}
                </h2>

                <p className="mt-6 text-gray-500">
                    Engineering leader with 13+
                    years building scalable systems.
                </p>

                <div className="flex gap-4 mt-8">

                    <a
                        href="/resume.pdf"
                        download
                        className="bg-black text-white px-6 py-3 rounded-xl"
                    >
                        Download Resume
                    </a>

                    <a
                        href="#contact"
                        className="border px-6 py-3 rounded-xl"
                    >
                        Contact
                    </a>

                </div>
            </div>
        </section>
    );
}