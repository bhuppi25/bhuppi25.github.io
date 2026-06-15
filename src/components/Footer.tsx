import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

                <div>
                    <h3 className="font-semibold">
                        Bhupendra Singh
                    </h3>

                    <p className="text-zinc-500">
                        Engineering Manager • Software Architect
                    </p>
                </div>

                <div className="flex gap-5 mt-4 md:mt-0">

                    <a
                        href="https://github.com/bhuppi25"
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-blue-500"
                    >
                        <FaGithub size={24} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/bhupendra-singh-8b9b9545/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-blue-500"
                    >
                        <FaLinkedin size={24} />
                    </a>

                </div>

            </div>
        </footer>
    );
}