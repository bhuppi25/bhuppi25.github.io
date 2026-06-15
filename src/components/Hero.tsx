import { TypeAnimation } from "react-type-animation";
import {
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaDownload,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-24">
            <div className="text-center max-w-6xl">

                {/* Profile Image */}
                <div className="relative inline-block">
                    <img
                        src="/me.jpg"
                        alt="Bhupendra Singh"
                        className="
              w-48
              h-48
              rounded-full
              mx-auto
              border-4
              border-blue-500
              shadow-2xl
              shadow-blue-500/20
              object-cover
            "
                    />

                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-black" />
                </div>

                {/* Name */}
                <h1
                    className="
            text-6xl
            md:text-7xl
            font-extrabold
            mt-8
            bg-gradient-to-r
            from-white
            via-blue-200
            to-blue-500
            bg-clip-text
            text-transparent
          "
                >
                    Bhupendra Singh
                </h1>

                {/* Animated Title */}
                <TypeAnimation
                    sequence={[
                        "Senior Engineering Manager",
                        2000,
                        "Software Architect",
                        2000,
                        "Platform Engineering Leader",
                        2000,
                        "Distributed Systems Expert",
                        2000,
                    ]}
                    wrapper="h2"
                    speed={40}
                    repeat={Infinity}
                    className="text-2xl md:text-3xl mt-4 text-blue-400 font-medium"
                />

                {/* Summary */}
                <p className="mt-8 text-zinc-400 text-lg max-w-3xl mx-auto leading-8">
                    13+ years of experience building scalable distributed systems,
                    leading high-performing engineering teams, and delivering
                    mission-critical platforms at Ola Electric, Gojek, OYO,
                    Airtel Payments Bank, and Gaana.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">

                    <a
                        href="https://github.com/bhuppi25"
                        target="_blank"
                        rel="noreferrer"
                        className="
              flex items-center gap-2
              px-5 py-3
              rounded-full
              bg-zinc-900
              border border-zinc-800
              hover:border-blue-500
              transition-all
            "
                    >
                        <FaGithub />
                        <span>bhuppi25</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/bhupendra-singh-8b9b9545/"
                        target="_blank"
                        rel="noreferrer"
                        className="
              flex items-center gap-2
              px-5 py-3
              rounded-full
              bg-zinc-900
              border border-zinc-800
              hover:border-blue-500
              transition-all
            "
                    >
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>

                    <div
                        className="
              flex items-center gap-2
              px-5 py-3
              rounded-full
              bg-zinc-900
              border border-zinc-800
            "
                    >
                        <FaMapMarkerAlt />
                        <span>Bengaluru, India</span>
                    </div>

                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

                    <div>
                        <div className="text-4xl font-bold text-blue-500">
                            13+
                        </div>
                        <div className="text-zinc-500">
                            Years Experience
                        </div>
                    </div>

                    <div>
                        <div className="text-4xl font-bold text-blue-500">
                            11
                        </div>
                        <div className="text-zinc-500">
                            Engineers Led
                        </div>
                    </div>

                    <div>
                        <div className="text-4xl font-bold text-blue-500">
                            20TB
                        </div>
                        <div className="text-zinc-500">
                            Monthly Savings
                        </div>
                    </div>

                    <div>
                        <div className="text-4xl font-bold text-blue-500">
                            50%
                        </div>
                        <div className="text-zinc-500">
                            Issue Reduction
                        </div>
                    </div>

                </div>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-4 mt-14 flex-wrap">

                    <a
                        href="/resume.pdf"
                        download
                        className="
              flex items-center gap-2
              bg-blue-600
              hover:bg-blue-700
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
                    >
                        <FaDownload />
                        Download Resume
                    </a>

                    <a
                        href="#projects"
                        className="
              border
              border-zinc-700
              hover:border-blue-500
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
                    >
                        View Projects
                    </a>

                </div>

            </div>
        </section>
    );
}