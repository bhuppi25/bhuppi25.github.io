import {
    FaRocket,
    FaCloud,
    FaDatabase,
    FaMoneyCheckAlt,
    FaServer,
    FaCar,
    FaVideo,
    FaChartLine,
    FaGamepad,
    FaSearch,
    FaPalette,
} from "react-icons/fa";

type Project = {
    title: string;
    icon: React.ReactNode;
    company: string;
    impact: string;
};

const projects: Project[] = [
    {
        title: "MoveOS 5 Platform",
        icon: <FaRocket />,
        company: "Ola Electric",
        impact:
            "Architected distributed event-driven microservices platform powering MoveOS 5.",
    },

    {
        title: "Kafka Infrastructure Optimization",
        icon: <FaDatabase />,
        company: "Ola Electric",
        impact:
            "Reduced Kafka storage usage by 40% using compression and architecture improvements.",
    },

    {
        title: "Flink Pipeline Optimization",
        icon: <FaServer />,
        company: "Ola Electric",
        impact:
            "Saved 20TB/month by redesigning event pipelines and removing unnecessary events.",
    },

    {
        title: "Production Stability Initiative",
        icon: <FaChartLine />,
        company: "Ola Electric",
        impact:
            "Reduced production incidents by 50% through root-cause analysis and technical debt reduction.",
    },

    {
        title: "Android Auto Integration",
        icon: <FaCar />,
        company: "Gaana",
        impact:
            "Led Android Auto integration to enhance in-car entertainment experience.",
    },

    {
        title: "QR Payment Platform",
        icon: <FaMoneyCheckAlt />,
        company: "Gaana",
        impact:
            "Designed and implemented QR-code based payment architecture.",
    },

    {
        title: "Multi Theme Platform",
        icon: <FaPalette />,
        company: "OYO",
        impact:
            "Designed multi-theme architecture used by millions of customers.",
    },

    {
        title: "Unified Monitoring System",
        icon: <FaChartLine />,
        company: "OYO",
        impact:
            "Built centralized monitoring and alerting for Android, iOS and Web platforms.",
    },

    {
        title: "Bulk Pricing API",
        icon: <FaCloud />,
        company: "Gojek",
        impact:
            "Reduced API traffic by 50% by redesigning pricing APIs into bulk estimate APIs.",
    },

    {
        title: "Aadhaar OCR Platform",
        icon: <FaSearch />,
        company: "Airtel Payments Bank",
        impact:
            "Automated identity verification through OCR-driven Aadhaar processing workflows.",
    },

    {
        title: "Video Processing Pipeline",
        icon: <FaVideo />,
        company: "App Street",
        impact:
            "Built AWS Lambda and FFmpeg powered video transformation pipeline.",
    },

    {
        title: "Multiplayer Gaming Server",
        icon: <FaGamepad />,
        company: "Twist Future Software",
        impact:
            "Engineered high-concurrency multiplayer game server with real-time interactions.",
    },
];

export default function Projects() {
    return (
        <section
            id="Projects"
            className="py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold mb-12">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="
                group
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900
                p-8
                hover:border-blue-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
                        >
                            <div className="flex items-center gap-4">

                                <div
                                    className="
                    h-16
                    w-16
                    rounded-2xl
                    bg-blue-500/10
                    flex
                    items-center
                    justify-center
                    text-blue-500
                    text-3xl
                  "
                                >
                                    {project.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>

                                    <p className="text-zinc-500">
                                        {project.company}
                                    </p>
                                </div>

                            </div>

                            <p className="mt-6 text-zinc-400 leading-7">
                                {project.impact}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}