export default function Footer() {
    return (
        <footer className="py-8 border-t">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                <div>
                    <h3 className="font-bold">
                        Bhupendra Singh
                    </h3>

                    <p className="text-gray-500">
                        Engineering Manager | Architect
                    </p>
                </div>

                <div className="flex gap-6 mt-4 md:mt-0">

                    <a
                        href="https://github.com"
                        target="_blank"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:yadavbhupendra25@gmail.com"
                    >
                        Email
                    </a>

                </div>
            </div>
        </footer>
    );
}