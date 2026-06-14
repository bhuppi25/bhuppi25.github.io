import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-5xl">

                <img
                    src="/me.jpg"
                    alt="Bhupendra Singh"
                    className="w-44 h-44 rounded-full mx-auto border-4 border-blue-500"
                />

                <h1 className="text-6xl md:text-7xl font-bold mt-8">
                    Bhupendra Singh
                </h1>

                <TypeAnimation
                    sequence={[
                        "Engineering Manager",
                        2000,
                        "Software Architect",
                        2000,
                        "Tech Leader",
                        2000,
                    ]}
                    wrapper="h2"
                    speed={40}
                    repeat={Infinity}
                    className="text-2xl mt-4 text-blue-400"
                />

                <p className="mt-8 text-zinc-400 text-lg">
                    Building scalable distributed systems and
                    leading engineering teams for 13+ years.
                </p>

                <div className="flex justify-center gap-4 mt-10">
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-blue-600 px-6 py-3 rounded-xl"
                    >
                        Download Resume
                    </a>

                    <a
                        href="#contact"
                        className="border border-zinc-700 px-6 py-3 rounded-xl"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
}