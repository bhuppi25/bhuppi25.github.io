const projects = [
    {
        title: "MoveOS 5 Platform",
        description:
            "Architected distributed event-driven microservices platform.",
    },
    {
        title: "Kafka Optimization",
        description:
            "Reduced storage usage by 40%.",
    },
    {
        title: "Flink Pipeline Redesign",
        description:
            "Saved 20TB storage per month.",
    },
    {
        title: "Bulk Pricing API",
        description:
            "Reduced API calls by 50%.",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-24"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold mb-10">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="border rounded-2xl p-6"
                        >
                            <h3 className="text-2xl font-semibold">
                                {project.title}
                            </h3>

                            <p className="mt-3">
                                {project.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}